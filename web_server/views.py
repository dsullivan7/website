"""Webserver views for the app."""

import os

from web_server import app

if 'DEBUG' in os.environ:
    app.debug = os.environ['DEBUG']


@app.route('/')
def index():
    """Content views."""
    return app.send_static_file('index.html')


@app.after_request
def add_header(response):
    """Add headers to stop caching."""
    response.headers['X-UA-Compatible'] = 'IE=Edge,chrome=1'
    response.headers['Cache-Control'] = 'public, max-age=0'
    return response
