"""yaspi URL Configuration

"""
from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.index),
    path('', include('apps.airports.urls')),
    path('vault/', admin.site.urls),
    path('api/v1/auth/', include('djoser.urls')),
    path('api/v1/auth/', include('djoser.urls.jwt')),
    path('api/v1/profile/', include('apps.profiles.urls')),
    path('api/v1/blogs/', include('apps.blog.urls')),
    path('api/v1/banners/', include('apps.banner.urls')),
    path('api/v1/works/', include('apps.works.urls')),
    path('api/v1/incidents/', include('apps.incident.urls')),
    path('api/v1/incidentcontrol/', include('apps.incidentcontrol.urls')),
    path('api/v1/feedback/', include('apps.feedback.urls')),


]

admin.site.site_header = "Yaspi Admin"
admin.site.site_title = "Yaspi"
admin.site.index_title = "Admin Panel"