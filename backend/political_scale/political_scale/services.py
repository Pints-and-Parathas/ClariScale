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

    response = model.generate_content(prompt)
    return response.text


def analyse_text(article_text):
    prompt = """"Analyze the following article to identify its key themes. Consider themes related to
    social, economic, cultural, and geopolitical issues, including international conflicts, humanitarian concerns,
    and socio-political ideologies. Classify the article's political alignment as 'left-wing,' 'right-wing,' or 'neutral' based on the following guidance:

    Left-Wing: Emphasis on social equality, government intervention, progressive policies, support for minority rights, diplomacy in foreign policy, 
    environmentalism, social welfare, humanitarian aid, and advocacy for international cooperation.
    Right-Wing: Focus on individual rights, economic liberalization, reduced government intervention, traditional values, national sovereignty,
    defense policies, prioritization of national interests in foreign policy, and support for market-based solutions.
    When assessing politically polarized issues (e.g., international conflicts, cultural debates, environmental regulations):

    Note if the article promotes diplomatic or cooperative solutions, human rights, and global partnerships (often associated with left-wing perspectives).
    Alternatively, note if the article emphasizes national security, economic self-interest, traditional alliances, or a defensive posture (often associated with right-wing perspectives).
    If the article does not clearly indicate a left or right alignment, classify it as 'neutral.'

    Provide the output in the following JSON structure:
    {
        "themes": [
            {
                "theme": "Description of Theme 1",
                "political_alignment": "left-wing / right-wing / neutral",
                "reasoning": "Explanation of why this theme is classified in this way."
            },
            {
                "theme": "Description of Theme 2",
                "political_alignment": "left-wing / right-wing / neutral",
                "reasoning": "Explanation of why this theme is classified in this way."
            }
        ],
        "overall_alignment": "Overall classification of the article as left-wing / right-wing / neutral based on predominant themes"
    }
      """

