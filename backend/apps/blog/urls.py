"""Urls for blog app"""
from django.urls import path
from .views import BlogListAPIView

urlpatterns = [
    path("all/", BlogListAPIView.as_view(), name = "get_blogs"),
]