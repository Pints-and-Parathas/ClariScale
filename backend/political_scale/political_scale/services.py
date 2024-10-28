import google.generativeai as genai
import os

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

def get_data_from_prompt_api():
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content("Write a story about a magic backpack.")

    return response.text

def get_data_from_sentiment_api():
    prompt = """Tell me whether the following sentence's sentiment is positive or negative or something in between.
    Sentence Mint chocolate chip ice cream is da best.
    """
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)
    return response.text