from rest_framework import generics, permissions, status, filters
from apps.incident.pagination import IncidentPagination
from .models import Incident
# from .renderers import BlogJSONRenderer
from .serializers import IncidentSerializer

class IncidentListAPIView(generics.ListAPIView):
    #use this if authentication needed before accessing api permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    queryset = Incident.objects.all().order_by('incidentdate')
    serializer_class = IncidentSerializer
    pagination_class = IncidentPagination
    filter_backends = [ filters.SearchFilter]
    