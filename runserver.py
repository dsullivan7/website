"""The main entry point into the app."""

import logging
import sys

from web_server import app

# logging configuration
logger = logging.getLogger()
handler = logging.StreamHandler(stream=sys.stdout)
formatter = logging.Formatter(
    'package=%(name)-12s level=%(levelname)-8s message="%(message)s"')
handler.setFormatter(formatter)
logger.addHandler(handler)
logger.setLevel(logging.INFO)

if __name__ == '__main__':

    app.run()
