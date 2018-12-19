from rest_framework.serializers import ModelSerializer
from .models import TestModel


class TestModelSerializer(ModelSerializer):

    class Meta:
        model = TestModel
        fields = "__all__"
