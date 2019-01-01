from django.utils.deprecation import MiddlewareMixin


class Corsmiddleware(MiddlewareMixin):

    def process_response(self, request, response):
        response["Access-Control-Allow-Origin"] = "*"
        print("process_request")
        # response["Content-Type"] = "application/json"
        return response
