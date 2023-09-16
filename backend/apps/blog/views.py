"""Views for blog app"""
from rest_framework import generics, permissions, status, filters
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.blog.pagination import BlogsPagination
from .models import Blogs
from .renderers import BlogJSONRenderer
from .serializers import BlogsSerializer

class BlogListAPIView(generics.ListAPIView):
    #use this if authentication needed before accessing api permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    queryset = Blogs.objects.filter(is_published=True).order_by('-created_date')
    serializer_class = BlogsSerializer
    pagination_class = BlogsPagination
    filter_backends = [ filters.SearchFilter]
    

