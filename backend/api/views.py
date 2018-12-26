from django.shortcuts import render
from .serializers import TestModelSerializer
from rest_framework.generics import ListAPIView
from .models import TestModel
from rest_framework.views import APIView
from django.http.response import JsonResponse
import os
from rest_framework.generics import CreateAPIView
from .serializers import UserModelSerializer


class TestModelListView(ListAPIView):

    serializer_class = TestModelSerializer
    queryset = TestModel.objects.all()


class ParagraphText(APIView):

    permission_classes = []

    def get(self, request):
        file_list = os.listdir("./txt")
        txt = open("./txt/" + file_list[2], "r").read()
        txt1 = {"txt2": txt}
        return JsonResponse(data=txt1)


class SingUpView(CreateAPIView):
    serializer_class = UserModelSerializer
    permission_classes = []
