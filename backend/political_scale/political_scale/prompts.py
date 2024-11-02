FETCH_ARTICLE_DATA_PROMPT = """Using this html: {html_content}
    Extract information about the article, disregard anything that is an advert or a link to another article.
    Provide a response using this JSON scheme: 
    {{
        "author": "str",
        "outlet": "str",
        "title": "str",
        "text": "str",
        "publish_date": "str",
    }}
    VERY IMPORTANT: Please provide the JSON response without any formatting or code blocks."""

TEXT_ANALYSIS_PROMPT = """"Using this text: {article_text} Analyze the article to identify its key themes. Consider themes related to
    social, economic, cultural, and geopolitical issues, including international conflicts, humanitarian concerns,
    and socio-political ideologies. Classify the article's political alignment as a score 0-100 where 0 is far left-wing and 100 is far right-wing
    based on the following guidance:

    Left-Wing: Emphasis on social equality, government intervention, progressive policies, support for minority rights, diplomacy in foreign policy, 
    environmentalism, social welfare, humanitarian aid, and advocacy for international cooperation.
    Right-Wing: Focus on individual rights, economic liberalization, reduced government intervention, traditional values, national sovereignty,
    defense policies, prioritization of national interests in foreign policy, and support for market-based solutions.
    When assessing politically polarized issues (e.g., international conflicts, cultural debates, environmental regulations):

    Note if the article promotes diplomatic or cooperative solutions, human rights, and global partnerships (often associated with left-wing perspectives).
    Alternatively, note if the article emphasizes national security, economic self-interest, traditional alliances, or a defensive posture (often associated with right-wing perspectives).
    If the article does not clearly indicate a left or right alignment, classify it as 'neutral.'

    Provide a response using this JSON scheme:
    {{
        "article_themes": [
            {{
                "theme": "str",
                "political_alignment": "int",
                "reasoning": "str"
            }},
            {{
                "theme": "str",
                "political_alignment": "int",
                "reasoning": "str"
            }}
        ],
        "overall_alignment": "int",
    }}
    VERY IMPORTANT: Please provide the JSON response without any formatting or code blocks."""

OUTLET_DETAILS_PROMPT = """For this publisher: {outlet_name}
                Assess the following five questions and provide a response with a brief verbal summary of points and a political leaning as a score 0-100 where 0 is far left-wing and 100 is far right-wing.
                Question 1: What is the historical political leaning of this outlet?
                Question 2: Who owns the outlet and what are their political leanings?
                Question 3: What historical political affiliations has the outlet held?
                Question 4: Is the organisation owned by a parent company, and if so, how do they typically lean politically?
                Question 5: Who did this organisation support, if anyone, in the previous election cycle, and what political leaning do they represent?
                Provide a response using this JSON scheme: 
                {{
                    outlet_info : [
                        "questionNumber":
                            {{
                                "summary": "str",
                                "score": "int"
                            }},
                    ],
                }}
                VERY IMPORTANT: Please provide the JSON response without any formatting or code blocks.
            """