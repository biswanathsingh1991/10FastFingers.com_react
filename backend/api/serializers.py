from rest_framework.serializers import ModelSerializer
from .models import TestModel


class TestModelSerializer(ModelSerializer):

    class Meta:
        models = TestModel
        fields = "__all__"
