from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Url


@api_view(["POST"])
def shorten_url(request):
    try:
        url = request.data.get("url")

        if not url:
            return Response(
                {"error": "URL not provided"}, status=status.HTTP_400_BAD_REQUEST
            )

        existing_url = Url.objects.filter(url=url).first()
        if existing_url:
            short_url = f"http://{request.get_host()}/{existing_url.shortened_url}"
            return Response(
                {
                    "short_url": short_url,
                    "short_code": existing_url.shortened_url,
                },
                status=status.HTTP_200_OK,
            )

        new_url = Url.create(url)
        short_url = f"http://{request.get_host()}/{new_url.shortened_url}"

        return Response(
            {
                "short_url": short_url,
                "short_code": new_url.shortened_url,
            },
            status=status.HTTP_200_OK,
        )

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
