
from django.urls import path, include, re_path
from . views import TestModelListView
from .views import ParagraphText
from .views import SingUpView
from . import views


app_name = 'api'

urlpatterns = [
    path('', TestModelListView.as_view(), name="testmodel"),
    path('txt/', ParagraphText.as_view(), name="txt"),
    path('singup/', SingUpView.as_view(), name="singup"),
    path('userid/', views.userid, name="userid")
]
