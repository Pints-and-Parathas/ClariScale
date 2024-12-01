import os
from django.http import JsonResponse

EXTENSION_PRIVATE_ID = os.getenv("EXTENSION_PRIVATE_KEY")

class RestrictToExtensionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.allowed_origin = (f"chrome-extension://{EXTENSION_PRIVATE_ID}")

    def __call__(self, request):
        origin = request.headers.get("Origin")
        if not origin or origin != self.allowed_origin:
            return JsonResponse(
                {"error": "Unauthorized access: Invalid origin."},
                status=403
            )
        return self.get_response(request)