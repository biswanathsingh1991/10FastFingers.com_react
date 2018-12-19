
from django.urls import path
from . views import TestModelListView
from .views import paragraphText

app_name = 'api'

urlpatterns = [
    path('', TestModelListView.as_view(), name="testmodel"),
    path('/txt', paragraphText, name="txt"),
]
