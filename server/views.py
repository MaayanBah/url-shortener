from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import hashlib


def shorten(url: str) -> str:
    hash_object = hashlib.sha256(url.encode())
    hex_digest = hash_object.hexdigest()

    return hex_digest[:6]


@api_view(["POST"])
def shorten_url(request):
    try:
        url = request.data.get("url")

        if not url:
            return Response(
                {"error": "URL not provided"}, status=status.HTTP_400_BAD_REQUEST
            )
        short_code = shorten(url)
        host = request.get_host()
        short_url = f"http://{host}/{short_code}"

        # TODO change to redirect
        return Response(
            {
                "short_url": short_url,
                "short_code": short_code,
            },
            status=status.HTTP_200_OK,
        )

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
