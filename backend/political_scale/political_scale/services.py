import google.generativeai as genai
import requests
import os
import json
from django.http import JsonResponse

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

    prompt = f"""Using this html: {html_content}
                Extract information about the article, disregard anything that is an advert or a link to another article.
                Provide a response using this JSON scheme: 
                {{
                    "author": "str",
                    "title": "str",
                    "text": "str",
                    "publish_date": "str"
                }}
                Do not include any other text or characters in your response other than valid JSON
            """
    response = model.generate_content(prompt)
    
    try:
        response_json = json.loads(response.text)
    except json.JSONDecodeError as e:
        print("error " + str(e))
        response_json = {"error": str(e)}
    
    return JsonResponse(response_json)

def get_data_from_sentiment_api():
    prompt = """Tell me whether the following sentence's sentiment is positive or negative or something in between.
    Sentence Mint chocolate chip ice cream is da best.
    """
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text