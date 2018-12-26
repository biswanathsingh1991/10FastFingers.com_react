from django.db import models
from django.contrib.auth.models import User


class TestModel(models.Model):
    name = models.CharField(max_length=250)
    age = models.IntegerField()

    def __str__(self):
        return self.name


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=250)
    profilepic = models.ImageField(blank=True, null=True)
    created = models.DateField(blank=True, null=True)
    last_update = models.DateField(blank=True, null=True)
    last_login = models.DateField(blank=True, null=True)
    last_test = models.DateField(blank=True, null=True)
    total_test = models.IntegerField(blank=True, null=True)
    highest_wpm = models.IntegerField(blank=True, null=True)
    lowest_wpm = models.IntegerField(blank=True, null=True)
