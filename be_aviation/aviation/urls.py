"""
URL configuration for aviation project.
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include
from decouple import config

urlpatterns = [
    path(config("ADMIN"), admin.site.urls),
    path("", include("apps.airports.urls")),
    path("api/v1/auth/", include("djoser.urls")),
    path("api/v1/auth/", include("djoser.urls.jwt")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

admin.site.site_header = "Aviation Management Admin"
admin.site.site_title = "Aviation"
admin.site.index_title = "Admin Panel"