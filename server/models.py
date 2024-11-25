from django.db import models
import pyshorteners


class Url(models.Model):
    url = models.URLField(unique=True)
    shortened_url = models.CharField(max_length=6, unique=True)

    def __str__(self) -> str:
        return self.url
