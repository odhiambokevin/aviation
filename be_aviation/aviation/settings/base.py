"""global project settings"""
import os
from pathlib import Path
from decouple import config, Csv

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

ALLOWED_HOSTS=config('ALLOWED_HOSTS', cast=Csv())

# Application definition

"""django apps"""
DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.gis",
]

"""third-party apps"""
THIRD_PARTY_APPS = [
    "corsheaders",
    "djoser",
    "rest_framework",
    "rest_framework_gis",
    "rest_framework_simplejwt",
    "leaflet",
]

"""user-generated apps"""
USER_APPS = [
    "apps.users",
    "apps.profiles",
    "apps.airports",
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + USER_APPS

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.middleware.common.BrokenLinkEmailsMiddleware",
]

ROOT_URLCONF = "aviation.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "aviation.wsgi.application"


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": config("ENGINE"),
        # "OPTIONS": {"options": "-c search_path=aviationschema"},
        "NAME": config("DB_NAME"),
        "USER": config("DB_USER"),
        "PASSWORD": config("DB_PASSWORD"),
        "HOST": config("DB_HOST"),
        "PORT": config("DB_PORT"),
    }
}

# Email settings
EMAIL_BACKEND = config("EMAIL_BACKEND")
SERVER_EMAIL = config("DEFAULT_FROM_EMAIL")
EMAIL_HOST = config("EMAIL_HOST")
EMAIL_HOST_USER = config("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD")
EMAIL_PORT = 587
EMAIL_USE_TLS = True
DOMAIN = config("DOMAIN")
DEFAULT_FROM_EMAIL = config("DEFAULT_FROM_EMAIL")
SITE_NAME = config("SITE_NAME")
ADMINS = (
    ("Yaspi Admin", config("ADMIN_EMAIL")),
)
MANAGERS = ADMINS


# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "Africa/Nairobi"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = "/static/"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles_build", "static")
STATICFILES_DIRS = []

MEDIA_URL = "/media/"
MEDIA_ROOT = os.path.join(BASE_DIR / "media")

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTH_USER_MODEL = "users.User"

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework_simplejwt.authentication.JWTAuthentication"
    ]
}

from datetime import timedelta

SIMPLE_JWT = {
    "AUTH_HEADER_TYPES": ("JWT","Bearer",),
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=int(config("ACCESS_TOKEN_LIFETIME"))), 
    "REFRESH_TOKEN_LIFETIME": timedelta(minutes=int(config("REFRESH_TOKEN_LIFETIME"))),
    "SIGNING_KEY": config("SIMPLE_JWT_SIGNING_KEY"),
    "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
    "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
}

DJOSER = {
    "LOGIN_FIELD": "email",
    "USER_CREATE_PASSWORD_RETYPE": True,
    "USERNAME_CHANGED_EMAIL_CONFIRMATION": True,
    "PASSWORD_CHANGED_EMAIL_CONFIRMATION": True,
    "SEND_CONFIRMATION_EMAIL": True,
    "PASSWORD_RESET_CONFIRM_URL": "password/reset/confirm/{uid}/{token}",
    "SET_PASSWORD_RETYPE": True,
    "PASSWORD_RESET_CONFRIM_RETYPE": True,
    "USERNAME_RESET_CONFRIM_URL": "email/reset/confirm/{uid}/{token}",
    "ACTIVATION_URL": "activate/{uid}/{token}",
    "SEND_ACTIVATION_EMAIL": True,
    "SERIALIZERS": {
        "user_create": "apps.users.serializers.CreateUserSerializer",
        "user": "apps.users.serializers.UserSerializer",
        "current_user": "apps.users.serializers.UserSerializer",
        "user_delete": "djoser.serializers.UserDeleteSerializer",
    },
}

# Leaflet Config
LEAFLET_CONFIG = {
    "DEFAULT_CENTER": (0.36, 36.635),
    "DEFAULT_ZOOM": 6,
    "MAX_ZOOM": 20,
    "MIN_ZOOM": 6,
    "SCALE": "both",
    "ATTRIBUTION_PREFIX": "Yaspi Labs",
    "SPATIAL_EXTENT": (32, -8, 45, 8),
}


# logs
import logging
import logging.config
from django.utils.log import DEFAULT_LOGGING

logger = logging.getLogger(__name__)

LOG_LEVEL = "INFO"

logging.config.dictConfig(
    {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "console": {
                "format": "%(asctime)s %(name)s %(module)s.py %(levelname)s %(message)s",
            },
            "file": {
                "format": "%(asctime)s %(levelname)s %(name)s %(module)s.py (line %(lineno)d) %(message)s",
            },
            "django.server": DEFAULT_LOGGING["formatters"]["django.server"],
        },
        "handlers": {
            "console": {
                "class": "logging.StreamHandler",
                "formatter": "console",
            },
            "file": {
                "level": config("DJANGO_LOG_LEVEL"),
                "class": "logging.FileHandler",
                "formatter": "file",
                "filename": config("DJANGO_LOG_FILE"),
            },
            "django.server": DEFAULT_LOGGING["handlers"]["django.server"],
        },
        "loggers": {
            "": {"level": config("DJANGO_LOG_LEVEL"), "handlers": ["console", "file"], "propagate": False},
            "apps": {"level": config("APPS_LOG_LEVEL"), "handlers": ["file"], "propagate": False},
            "django.server": DEFAULT_LOGGING["loggers"]["django.server"],
        },
    }
)
