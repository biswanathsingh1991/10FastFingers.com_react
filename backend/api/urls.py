
from django.urls import path
from . views import TestModelListView


app_name = 'api'

urlpatterns = [
    path('', TestModelListView.as_view(), name="testmodel"),
]
