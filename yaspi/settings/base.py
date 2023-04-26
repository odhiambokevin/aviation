from pathlib import Path
import os
from decouple import config

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# use this if setting up on Windows 10 with GDAL installed from OSGeo4W using defaults
if os.name == 'nt':
    import platform
    OSGEO4W = r"C:\OSGeo4W"
    if '64' in platform.architecture()[0]:
        OSGEO4W += ""
    assert os.path.isdir(OSGEO4W), "Directory does not exist: " + OSGEO4W
    os.environ['OSGEO4W_ROOT'] = OSGEO4W
    os.environ['GDAL_DATA'] = OSGEO4W + r"\share\gdal"
    os.environ['PROJ_LIB'] = OSGEO4W + r"\share\proj"
    os.environ['PATH'] = OSGEO4W + r"\bin;" + os.environ['PATH']

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config('SECRET_KEY')

# Application definition

DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.gis',
]

THIRD_PARTY_APPS = [    
    'corsheaders',
    'djoser',
    'rest_framework',
    'rest_framework_simplejwt',
    'leaflet',

]

USER_APPS = [
    'apps.users',
    'apps.profiles',
    'apps.blog',
    'apps.banner',
    'apps.works',
    'apps.incident',
    'apps.incidentcontrol',
]  

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + USER_APPS

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    
]

ROOT_URLCONF = 'yaspi.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'frontend/build')
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'yaspi.wsgi.application'

# Password validation
# https://docs.djangoproject.com/en/4.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Nairobi'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.0/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR / 'static')
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'frontend/build/static')
]

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Database
# https://docs.djangoproject.com/en/4.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': config('ENGINE'),
        'NAME': config('DB_NAME'),
        'USER': config('DB_USER'),
        'PASSWORD': config('DB_PASSWORD'),
        'HOST': config('DB_HOST'),
        'PORT': config('DB_PORT'),
    }
}

# Email settings
EMAIL_BACKEND = config('EMAIL_BACKEND')
EMAIL_HOST = config('EMAIL_HOST')
EMAIL_HOST_USER = config('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = config('EMAIL_HOST_PASSWORD')
EMAIL_PORT = 587
EMAIL_USE_TLS = True
DOMAIN = config('DOMAIN')
DEFAULT_FROM_EMAIL = config('DEFAULT_FROM_EMAIL')
SITE_NAME = config('SITE_NAME')
ADMINS = (
    ('Kevin Odhiambo', 'contactyaspi@gmail.com'),
)
MANAGERS = ADMINS

# Default primary key field type
# https://docs.djangoproject.com/en/4.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = "users.User"

REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": (

        "rest_framework_simplejwt.authentication.JWTAuthentication",

        )
}
 
from datetime import timedelta

SIMPLE_JWT = {
    "AUTH_HEADER_TYPES": (
        # "JWT",
        "Bearer",
        ),
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=60),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=1),
    "SIGNING_KEY": config('SIGNING_KEY'),
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
        "user_create":"apps.users.serializers.CreateUserSerializer",
        "user":"apps.users.serializers.UserSerializer",
        "current_user":"apps.users.serializers.UserSerializer",
        "user_delete":"djoser.serializers.UserDeleteSerializer",
    },
}

#Leaflet Config
LEAFLET_CONFIG = {
    'DEFAULT_CENTER': (-0.3, 36.25),
    'DEFAULT_ZOOM': 8,
    'MAX_ZOOM': 20,
    'SCALE':'both',
    'ATTRIBUTION_PREFIX': 'Yaspi Labs'
}

#logs
import logging
import logging.config
from django.utils.log import DEFAULT_LOGGING

logger = logging.getLogger(__name__)

LOG_LEVEL = "INFO"

logging.config.dictConfig({
    "version":1,
    "disable_existing_loggers":False,
    "formatters":{
        "console":{
            "format":"%(asctime)s %(name)-12s %(levelname)-8s %(message)s",
        },
        "file":{
            "format":"%(asctime)s %(name)-12s %(levelname)-8s %(message)s",
        },
        "django.server": DEFAULT_LOGGING["formatters"]["django.server"],
    },
    "handlers":{
        "console":{
            "class":"logging.StreamHandler",
            "formatter":"console",
        },
        "file":{
            "level":"INFO",
            "class":"logging.FileHandler",
            "formatter":"file",
            "filename":"logs/yaspi.log"
        },
        "django.server": DEFAULT_LOGGING["handlers"]["django.server"],
    },
    "loggers":{
         "":{"level":"INFO", "handlers":["console","file"],"propagate":False},
         "apps":{"level":"INFO", "handlers":["console"],"propagate":False},
         "django.server": DEFAULT_LOGGING["handlers"]["django.server"],
    }
})
