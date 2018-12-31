
from django.urls import path, include, re_path
from . views import TestModelListView
from .views import ParagraphText
from .views import SingUpView

app_name = 'api'

urlpatterns = [
    path('', TestModelListView.as_view(), name="testmodel"),
    # path('/txt', paragraphText, name="txt"),
    path('txt', ParagraphText.as_view(), name="txt"),
    path('singup', SingUpView.as_view(), name="singup"),
    re_path(r'^rest-auth/', include('rest_auth.urls')),
]
