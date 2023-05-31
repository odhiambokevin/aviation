"""Views for banner app"""
from rest_framework import generics
from .models import Banner
# from .renderers import BlogJSONRenderer
from .serializers import BannerSerializer

class BannerListAPIView(generics.ListAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer

