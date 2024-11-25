# URL Shortener API Documentation

This project is a simple URL shortener API built with Django and Django Rest Framework. The API allows you to shorten a given URL and retrieve the original URL using the shortened code.

## Features

- Shorten a URL: You can send a long URL and get back a shortened version.
- Redirect to the Original URL: Using the shortened URL code, you can retrieve the original URL.
- Database Storage: URLs and their corresponding shortened versions are stored in a database.

## API Endpoints

### Shorten URL

POST /shorten

This endpoint takes a long URL and returns a shortened version.

#### Request

URL: /shorten
Method: POST
Body (JSON):
url: The original URL you want to shorten (required).

```json
{
  "url": "https://www.example.com"
}
```

#### Response

- Status Code: 200 OK (if successful), 400 Bad Request (if url is not provided)
- Body (JSON):

  short_url: The full shortened URL (including domain).

  short_code: The shortened code (6 characters).

Example response (successful):

```json
{
  "short_url": "http://localhost:8000/abc123",
  "short_code": "abc123"
}
```

Example response (error if URL is missing):

```json
{
  "error": "URL not provided"
}
```

### Redirect to Original URL

GET /{short_code}

This endpoint takes a shortened code and redirects to the original URL associated with it.

Request

- URL: /abc123 (where abc123 is the short code).
- Method: GET

Response: 302 for a redirect to the original URL, 404 if the URL code does not exist in the database.
