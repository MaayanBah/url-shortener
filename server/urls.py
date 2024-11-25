from django.urls import path
from . import views

urlpatterns = [
    path("shorten", views.shorten_url, name="shorten"),
    path(
        "<str:short_code>", views.redirect_to_original_url, name="redirect_to_original"
    ),
]
