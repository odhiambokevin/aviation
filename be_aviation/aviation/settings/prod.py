"""settings for production environment"""
from .base import *

DEBUG = False

WSGI_APPLICATION = 'aviation.wsgi.app'

#GDAL Settings
GDAL_LIBRARY_PATH = "libgdal.so"
GEOS_LIBRARY_PATH = "libgeos_c.so.1"

CORS_ALLOWED_ORIGINS = ["yaspikenya.com", "https://aviation-nu.vercel.app"]
CORS_ALLOWED_METHODS = ["DELETE","GET","OPTIONS","PATCH","POST","PUT",]

# HTTPS SETTINGS
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
SECURE_SSL_REDIRECT = True

# HSTS SETTINGS
SECURE_HSTS_SECONDS = 3153600  # 1 year
SECURE_HSTS_PRELOAD = True
SECURE_HSTS_INCLUDE_SUBDOMAINS = True

