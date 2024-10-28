import google.generativeai as genai
import requests
import os
import json
from django.http import JsonResponse

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

def get_data_from_prompt_api():
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content("Write a story about a magic backpack.")

    return response.text



def fetch_article_data(url):
    pageHTML = requests.get(url)
    pageHTML.raise_for_status()
    model = genai.GenerativeModel("gemini-1.5-flash")
    prompt = f"""Using this html: {pageHTML.text}
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
        responseJson = json.loads(response.text)
    except json.JSONDecodeError as e:
        print("error " + str(e))
        responseJson = {"error": str(e)}
    
    return JsonResponse(responseJson)