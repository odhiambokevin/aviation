"""Pagination for blog app"""
from rest_framework.pagination import PageNumberPagination

class BlogsPagination(PageNumberPagination):
    page_size = 100