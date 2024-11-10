FETCH_ARTICLE_DATA_PROMPT = """Using this html: {html_content}
    Extract information about the article, disregard anything that is an advert or a link to another article.
    First set the boolean value based on whether the webpage is an article or not. If it isn't, stop processing and return immediately.
    Provide a response using this JSON scheme: 
    {{
        "is_article": "bool",
        "author": "str",
        "outlet": "str",
        "title": "str",
        "text": "str",
        "publish_date": "str",
    }}
    VERY IMPORTANT: Please provide the JSON response without any formatting or code blocks."""

TEXT_ANALYSIS_PROMPT = """"
    Assess the following text and provide a response with a brief verbal summary of points and a political leaning as a score from 0-100, where 0 is far left-wing and 100 is far right-wing.
    Using this text: {article_text} analyze the article's themes, tone, and the overall ideological stance of its content, considering not just the individual themes but also how the article frames issues or figures politically. This should be reflected in the `overall_alignment` score.

    Provide a response using this JSON format, overall_alignment should be calculated by combining the score for each theme and dividing by the number of themes:
    {{
        "article_info": {{
                "themes":
                    ["theme_number": {{
                        "theme": "str",
                        "political_alignment": "int",
                        "reasoning": "str"
                    }}],
            "overall_alignment": "int"
        }},
    }}
    VERY IMPORTANT: Please provide the JSON response without any formatting or code blocks."""

OUTLET_DETAILS_PROMPT = """For this publisher: {outlet_name}
                Assess the following five questions and provide a response with a brief verbal summary of points and a political leaning as a score 0-100 where 0 is far left-wing and 100 is far right-wing.
                Question 1: What is the historical political leaning of this outlet?
                Question 2: Who owns the outlet and what are their political leanings?
                Question 3: What historical political affiliations has the outlet held?
                Question 4: Is the organization owned by a parent company, and if so, how do they typically lean politically?
                Question 5: Who did this organization support, if anyone, in the previous election cycle, and what political leaning do they represent?
                Provide a response using this JSON scheme, overall_alignment should be calculated by combining the score for each question and dividing by the number of questions. To the nearest integer: 
                {{
                    "outlet_info": {{
                        "questions": [
                            {{
                                "summary": "str",
                                "score": "int"
                            }},
                        ]
                        "overall_alignment": "int",
                    }}
                }}
                VERY IMPORTANT: Please provide the JSON response without any formatting or code blocks.
            """