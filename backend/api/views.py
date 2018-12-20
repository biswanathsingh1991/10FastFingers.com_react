from django.shortcuts import render
from .serializers import TestModelSerializer
from rest_framework.generics import ListAPIView
from .models import TestModel
from rest_framework.views import APIView
from django.http.response import JsonResponse
import os
from rest_framework.decorators import api_view
from rest_framework.response import Response


class TestModelListView(ListAPIView):

    serializer_class = TestModelSerializer
    queryset = TestModel.objects.all()


# def paragraphText(request):
#     if request.method == 'GET':
#         file_list = os.listdir("./txt")
#         print(file_list)
#         txt = open("./txt/" + file_list[1], "r").readlines()
#         txt = {"txt": txt}
#         return JsonResponse(data=txt)


class ParagraphText(APIView):

    permission_classes = []

    def get(self, request):
        file_list = os.listdir("./txt")
        txt = open("./txt/" + file_list[1], "r").read()
        txt1 = {"txt2": txt}
        return JsonResponse(data=txt1)
