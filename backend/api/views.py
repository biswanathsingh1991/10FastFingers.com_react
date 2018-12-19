from django.shortcuts import render
from .serializers import TestModelSerializer
from rest_framework.generics import ListAPIView
from .models import TestModel
from rest_framework.views import APIView
from django.http.response import JsonResponse
import os
from rest_framework.decorators import api_view


class TestModelListView(ListAPIView):

    serializer_class = TestModelSerializer
    queryset = TestModel.objects.all()


@api_view('GET')
def paragraphText(request):
    if request.method == 'GET':
        file_list = os.listdir("./txt")
        print(file_list)
        txt = open("./txt/" + file_list[1], "r").readlines()
        txt = {"txt": txt}
        return JsonResponse(data=txt)
