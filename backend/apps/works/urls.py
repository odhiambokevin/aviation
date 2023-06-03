"""Urls for works app"""
from django.urls import path
from .views import WorkListAPIView

urlpatterns = [
    path("all/", WorkListAPIView.as_view(), name = "get_works"),
]