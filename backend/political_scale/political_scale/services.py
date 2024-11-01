import google.generativeai as genai
import requests
import os
import json
import copy
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
                    "outlet": "str",
                    "title": "str",
                    "text": "str",
                    "publish_date": "str"
                }}
                Do not include any other text or characters in your response other than valid JSON
            """
    response = model.generate_content(prompt)
    
    try:
        responseJson = json.loads(response.text)
        outlet = responseJson.get("outlet", "unknown outlet")
        outletJson = json.loads(get_outlet_details(outlet))

        merged_data = {
            "author": responseJson.get("author", ""),
            "title": responseJson.get("title", ""),
            "text": responseJson.get("text", ""),
            "publish_date": responseJson.get("publish_date", "")
        }
        
        # Embed each question inside the main structure
        for question_key, question_value in outletJson.items():  # Use .items() to iterate over dict
            merged_data[question_key] = {
                "summary": question_value.get("summary", ""),
                "score": question_value.get("score", 0)
            }
        #combinedJson = {**responseJson, **get_outlet_details(outlet)}
        print(get_outlet_details(outlet))
    except json.JSONDecodeError as e:
        print("error " + str(e))
        combinedJson = {"error": str(e)}
    
    return JsonResponse(merged_data)

def get_data_from_sentiment_api():
    prompt = """Tell me whether the following sentence's sentiment is positive or negative or something in between.
    Sentence Mint chocolate chip ice cream is da best.
    """
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text

def get_outlet_details(outletName):
    model = genai.GenerativeModel("gemini-1.5-flash")

    prompt = f"""For this publisher: {outletName}
                Assess the following five questions and provide a response with a brief verbal summary of points and a political leaning as a score 0-100 where 0 is far left-wing and 100 is far right-wing.
                Question 1: What is the historical political leaning of this outlet?
                Question 2: Who owns the outlet and what are their political leanings?
                Question 3: What historical political affiliations has the outlet held?
                Question 4: Is the organisation owned by a parent company, and if so, how do they typically lean politically?
                Question 5: Who did this organisation support, if anyone, in the previous election cycle, and what political leaning do they represent?
                Provide a response using this JSON scheme: 
                {{
                    "questionNumber":
                        {{
                            "summary": "str",
                            "score": "int"
                        }}
                }}
                Do not include any other text or characters in your response other than valid JSON
            """
    
    response = model.generate_content(prompt)
    print(response.prompt_feedback)
    return response.text