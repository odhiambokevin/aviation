"""Urls for incidentcontrol app"""
from django.urls import path
from .views import IncidentControlListAPIView, IncidentRawListAPIView, IncidentAPIView

urlpatterns = [
    path("all/", IncidentControlListAPIView.as_view(), name = "get_incidentcontrol"),
    path("raw/", IncidentRawListAPIView.as_view(), name = "get_incidentcontrol"),
    path("raw/<uuid:incidentid>/", IncidentAPIView.as_view(), name = "get_incidentcontrol"),
]