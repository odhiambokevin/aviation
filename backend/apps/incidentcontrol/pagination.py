"""Pagination for incidentcontrol app"""
from rest_framework.pagination import PageNumberPagination

class IncidentControlPagination(PageNumberPagination):
    page_size = 100