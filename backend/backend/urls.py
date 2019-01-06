
from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls', namespace="api")),
    re_path(r'^rest-auth/', include('rest_auth.urls')),

]
