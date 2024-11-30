from django.shortcuts import render
from .services import get_data_from_prompt_api, fetch_article_data
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
import json

def prompt_api_view(request):
    api_response = get_data_from_prompt_api()
    if api_response:
        return HttpResponse(api_response, content_type="text/plain")
    
    return HttpResponse("Error", content_type="text/plain")

@csrf_exempt
def submit_webpage(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            url_string = data.get("url")

            if url_string is None:
                raise json.JSONDecodeError("Missing 'url' key in the JSON data", "", 0)

            processed_article = fetch_article_data(url_string)
            return processed_article
        except json.JSONDecodeError as e:
            return JsonResponse({
                "status": "error",
                "message": str(e)
            }, status=400)

    return HttpResponse("This endpoint only accepts POST requests", content_type='text/plain')