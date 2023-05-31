"""Urls for incidentcontrol app"""
from django.urls import path
from .views import IncidentControlListAPIView

urlpatterns = [
    path("all/", IncidentControlListAPIView.as_view(), name = "get_incidentcontrol"),
]