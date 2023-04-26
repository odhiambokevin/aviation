from rest_framework import generics, permissions, status, filters
from apps.incidentcontrol.pagination import IncidentControlPagination
from .models import IncidentControl
# from .renderers import BlogJSONRenderer
from .serializers import IncidentControlSerializer

class IncidentControlListAPIView(generics.ListAPIView):
    #use this if authentication needed before accessing api permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    queryset = IncidentControl.objects.all().order_by('date')
    serializer_class = IncidentControlSerializer
    pagination_class = IncidentControlPagination
    filter_backends = [ filters.SearchFilter]