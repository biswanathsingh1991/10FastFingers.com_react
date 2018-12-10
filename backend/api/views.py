from django.shortcuts import render
from .serializers import TestModelSerializer
from rest_framework.generics import ListAPIView


class TestModelListView(ListAPIView):

    serializers_class = TestModelSerializer
