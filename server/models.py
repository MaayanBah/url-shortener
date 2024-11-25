from django.db import models
import hashlib


class Url(models.Model):
    url = models.URLField(unique=True)
    shortened_url = models.CharField(max_length=6, unique=True)

    def __str__(self) -> str:
        return self.url

    @classmethod
    def create(cls, url: str):
        shortened_url = cls.shorten(url)
        return cls.objects.create(url=url, shortened_url=shortened_url)

    @staticmethod
    def shorten(url: str) -> str:
        hash_object = hashlib.sha256(url.encode())
        hex_digest = hash_object.hexdigest()
        return hex_digest[:6]
