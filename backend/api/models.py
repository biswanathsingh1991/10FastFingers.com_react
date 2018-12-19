from django.db import models


class TestModel(models.Model):
    name = models.CharField(max_length=250)
    age = models.IntegerField()

    def __str__(self):
        return self.name
