"""AWS lambda function for obtaining a spotify refresh token (and access token) given a spotify
authorization token.
"""
import json
import logging
import os
import requests
from tune_buddies.serverless.util import (
    extract_bearer_token_from_api_event,
    generate_api_gateway_response,
    with_cors
)

SPOTIFY_REFRESH_TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
GRANT_TYPE = 'authorization_code'

logger = logging.getLogger(__name__)


@with_cors('https://tunebunnies.com', True)  # TODO
def handler(event, context):
    pass  # TODO
