"""Urls for incident app"""
from django.urls import path
from .views import IncidentListAPIView

urlpatterns = [
    path("all/", IncidentListAPIView.as_view(), name = "get_incidents"),
]