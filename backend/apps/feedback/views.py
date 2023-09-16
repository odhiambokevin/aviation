"""Views for feedback app"""
from rest_framework import generics, permissions, filters
from rest_framework.response import Response
from rest_framework.views import APIView
from apps.feedback.pagination import FeedbackPagination
from .models import Feedback
from .serializers import FeedbackSerializer

class FeedbackListAPIView(generics.ListCreateAPIView):
    #use this if authentication needed before accessing api permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    queryset =Feedback.objects.all().order_by('-posted_on')
    serializer_class = FeedbackSerializer
    pagination_class = FeedbackPagination
    filter_backends = [ filters.SearchFilter]