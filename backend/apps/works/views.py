"""Views for works app"""
from rest_framework import generics, filters
from .pagination import WorksPagination
from .models import Work
from .serializers import WorkSerializer

class WorkListAPIView(generics.ListAPIView):
    queryset = Work.objects.filter(is_published=True)
    serializer_class = WorkSerializer
    pagination_class = WorksPagination
    filter_backends = [ filters.SearchFilter]