from django.urls import path
from .views import BannerListAPIView

urlpatterns = [
    path("all/", BannerListAPIView.as_view(), name = "get_banner"),
]