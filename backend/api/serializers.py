from rest_framework.serializers import ModelSerializer
from .models import TestModel
from django.contrib.auth.models import User


class TestModelSerializer(ModelSerializer):

    class Meta:
        model = TestModel
        fields = "__all__"


class UserModelSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ("username", "password", "first_name", "last_name", "email")
