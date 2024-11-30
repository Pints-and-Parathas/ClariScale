from django.http import JsonResponse

class RestrictToExtensionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.allowed_origin = "chrome-extension://ecokmmndgbpkdkllflbgepjhdanfgdgk"

    def __call__(self, request):
        origin = request.headers.get("Origin")
        if not origin or origin != self.allowed_origin:
            return JsonResponse(
                {"error": "Unauthorized access: Invalid origin."},
                status=403
            )
        return self.get_response(request)