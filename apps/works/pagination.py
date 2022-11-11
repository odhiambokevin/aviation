from rest_framework.pagination import PageNumberPagination

class WorksPagination(PageNumberPagination):
    page_size = 5