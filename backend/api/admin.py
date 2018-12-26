from django.contrib import admin
from . models import TestModel
from .models import UserProfile
# Register your models here.


admin.site.register(TestModel)
admin.site.register(UserProfile)
