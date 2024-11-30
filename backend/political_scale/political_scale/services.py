import google.generativeai as genai
import requests
import os
import json
import asyncio
import math
from bs4 import BeautifulSoup
from .utils import join_json, run_async_tasks
from django.http import JsonResponse
from .prompts import TEXT_ANALYSIS_PROMPT, OUTLET_DETAILS_PROMPT, FETCH_ARTICLE_DATA_PROMPT
from concurrent.futures import ThreadPoolExecutor

executor = ThreadPoolExecutor(max_workers=10)

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise EnvironmentError("GEMINI_API_KEY env variable is not set")

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

def get_data_from_prompt_api():
    
    response = model.generate_content("Write a story about a magic backpack.")

    return response.text


def fetch_article_data(url):
    page_html = requests.get(url, timeout=10)
    page_html.raise_for_status()
    html_content = page_html.content.decode('utf-8')
    prompt = FETCH_ARTICLE_DATA_PROMPT.format(html_content = extract_article_content(html_content))
    response = model.generate_content(prompt)

    try:
        response_json = json.loads(response.text)

        outlet = response_json.get("outlet", "unknown outlet")
        article_text = response_json.get("text", "article text unavailable")

        merged_data = {
            "is_article": response_json.get("is_article", False),
            "author": response_json.get("author", ""),
            "title": response_json.get("title", ""),
            "publish_date": response_json.get("publish_date", ""),
        }

        if not merged_data["is_article"]:
            return JsonResponse({"is_article": False})

        outlet_response, article_text_response = run_async_tasks(
            get_outlet_details(outlet), get_text_analysis(article_text)
        )

        outlet_json = json.loads(outlet_response)
        article_text_json = json.loads(article_text_response)

        if article_text_json.get("error"):
            return JsonResponse(article_text_json, status=500)
        elif outlet_json.get("error"):
            return JsonResponse(outlet_json, status=500)
        
        combined_score = math.trunc((outlet_json.get('outlet_info', {}).get('overall_alignment', 0) + article_text_json.get('article_info', {}).get('overall_alignment', 0)) / 2)
        print(outlet_json)
        print(article_text_json.get('overall_alignment', 0))
        merged_data["combined_score"] = combined_score
        
        try:
            merged_data = join_json(merged_data, outlet_json, ["summary", "score"])
            merged_data = join_json(merged_data, article_text_json, ["theme", "political_alignment", "reasoning", "overall_alignment"])
        except Exception as e:
            return JsonResponse({"error": f"Article data could not be comined, Reason: {str(e)}"}, status=500)
        
    except json.JSONDecodeError as e:
        print("error " + str(e))
        return JsonResponse({"error": f"error parsing JSON response {str(e)}"}, status=500)
    
    return JsonResponse(merged_data)

async def get_outlet_details(outlet_name):
    prompt = OUTLET_DETAILS_PROMPT.format(outlet_name = outlet_name)
    loop = asyncio.get_running_loop()
    
    try:
        response = await asyncio.wait_for(
            loop.run_in_executor(None, model.generate_content, prompt),
            timeout=15
        )
        return response.text
    
    except asyncio.TimeoutError:
        print("Timeout error when generating outlet details")
        return json.dumps({"error": "Request to generate outlet details timed out"})
    except Exception as e:
        return json.dumps({"error": (f"Error retrieving outlet details: {e}")})


async def get_text_analysis(article_text):
    prompt = TEXT_ANALYSIS_PROMPT.format(article_text = article_text)
    loop = asyncio.get_running_loop()
    
    try:
        response = await asyncio.wait_for(
            loop.run_in_executor(None, model.generate_content, prompt),
            timeout=15
        )
        return response.text
    
    except asyncio.TimeoutError:
        print("Timeout error when generating text analysis")
        return json.dumps({"error": "Request to generate text analysis timed out"})
    except Exception as e:
        return json.dumps({"error": (f"Error retrieving article details: {e}")})


def extract_article_content(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')

    # Remove ads, scripts, and irrelevant tags
    for script in soup(['script', 'style', 'aside', 'footer', 'nav']):
        script.decompose()

    # Extract the main content, like the article body
    article_body = soup.find('article')  # or any other main article container
    if article_body:
        return article_body.get_text(strip=True)
    return soup.get_text(strip=True)