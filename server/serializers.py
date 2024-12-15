from rest_framework import serializers
from .models import Url


class UrlSerializer(serializers.ModelSerializer):
    url = serializers.URLField()

    class Meta:
        model = Url
        fields = ["url"]
