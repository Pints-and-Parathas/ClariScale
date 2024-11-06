import google.generativeai as genai
import requests
import os
import json
from .utils import join_json, run_async_tasks
from django.http import JsonResponse
from .prompts import TEXT_ANALYSIS_PROMPT, OUTLET_DETAILS_PROMPT, FETCH_ARTICLE_DATA_PROMPT

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

def get_data_from_prompt_api():
    
    response = model.generate_content("Write a story about a magic backpack.")

    return response.text


def fetch_article_data(url):
    page_html = requests.get(url)
    page_html.raise_for_status()
    html_content = page_html.content.decode('utf-8')

    prompt = FETCH_ARTICLE_DATA_PROMPT.format(html_content = html_content)
    response = model.generate_content(prompt)
    
    try:
        response_json = json.loads(response.text)
        outlet = response_json.get("outlet", "unknown outlet")
        # outlet_json = json.loads(get_outlet_details(outlet))
        article_text = response_json.get("text", "article text unavailable")

        # outlet_details_task = get_outlet_details(outlet)
        # text_analysis_task = get_text_analysis(article_text)

        outlet_response, article_text_response = run_async_tasks(
            get_outlet_details(outlet), get_text_analysis(article_text)
        )

        outlet_json = json.loads(outlet_response)
        article_text_json = json.loads(article_text_response)

        merged_data = {
            "author": response_json.get("author", ""),
            "title": response_json.get("title", ""),
            "text": response_json.get("text", ""),
            "publish_date": response_json.get("publish_date", ""),
        }

        merged_data = join_json(merged_data, outlet_json, ["summary", "score"])
        merged_data = join_json(merged_data, article_text_json, ["theme", "political_alignment", "reasoning", "overall_alignment"])

    except json.JSONDecodeError as e:
        print("error " + str(e))
        merged_data = {"error": str(e)}
    
    return JsonResponse(merged_data)

def get_data_from_sentiment_api():
    prompt = """Tell me whether the following sentence's sentiment is positive or negative or something in between.
    Sentence Mint chocolate chip ice cream is da best.
    """

    response = model.generate_content(prompt)
    return response.text

async def get_outlet_details(outlet_name):
    model = genai.GenerativeModel("gemini-1.5-flash")

    prompt = OUTLET_DETAILS_PROMPT.format(outlet_name = outlet_name)
    
    response = model.generate_content(prompt)
    return response.text


async def get_text_analysis(article_text):
    prompt = TEXT_ANALYSIS_PROMPT.format(article_text = article_text)

    response = model.generate_content(prompt)

    return response.text
