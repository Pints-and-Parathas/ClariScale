from django.shortcuts import render
from .services import get_data_from_prompt_api, get_data_from_sentiment_api
from django.http import HttpResponse

def prompt_api_view(request):
    api_response = get_data_from_prompt_api()
    if api_response:
        return HttpResponse(api_response, content_type="text/plain")
    
    return HttpResponse("Error", content_type="text/plain")

def sentiment_api_view(request):
    api_response = get_data_from_sentiment_api()
    if api_response:
        return HttpResponse(api_response, content_type="text/plain")
    
    return HttpResponse("Error", content_type="text/plain")