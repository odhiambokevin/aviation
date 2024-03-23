"""Urls for profiles app"""

from django.urls import path
from .views import (
    GetProfileAPIView,
    UpdateProfileAPIView,
    WControlListAPIView,
    WManagerListAPIView,
)

urlpatterns = [
    path("me/", GetProfileAPIView.as_view(), name="get_profile"),
    path("update/<str:username>/", UpdateProfileAPIView.as_view(), name="update_profile"),
    path("wofficers/all/", WControlListAPIView.as_view(), name="wofficers"),
    path("wmanagers/all/", WManagerListAPIView.as_view(), name="wmanagers"),
]
