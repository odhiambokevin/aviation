"""Pagination for incident app"""
from rest_framework.pagination import PageNumberPagination

class IncidentPagination(PageNumberPagination):
    page_size = 100