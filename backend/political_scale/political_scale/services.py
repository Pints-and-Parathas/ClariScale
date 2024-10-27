import google.generativeai as genai
import os

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=GEMINI_API_KEY)

def get_data_from_prompt_api():
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content("Write a story about a magic backpack.")

    return response.text