"""Views for incidentcontrol app"""
from rest_framework import generics, permissions, status, filters,views, response
from rest_framework.response import Response
from apps.incidentcontrol.pagination import IncidentControlPagination
from .models import IncidentControl
# from .renderers import BlogJSONRenderer
from .serializers import IncidentControlSerializer, IncidentControlRawSerializer

class IncidentControlListAPIView(generics.ListAPIView):
    #use this if authentication needed before accessing api permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    queryset = IncidentControl.objects.filter(is_verified=True).order_by('-date')
    serializer_class = IncidentControlSerializer
    pagination_class = IncidentControlPagination
    filter_backends = [ filters.SearchFilter]

class IncidentRawListAPIView(views.APIView):
    #use this if authentication needed before accessing api permission_classes = [permissions.IsAuthenticated]
    pagination_class = IncidentControlPagination
    filter_backends = [ filters.SearchFilter]
    permission_classes = [permissions.AllowAny]
    def get(self, request):
        rawincidents = IncidentControl.objects.filter(is_verified=False).order_by('date')
        serializer = IncidentControlRawSerializer(rawincidents, many=True)
        return Response(serializer.data)
    
class IncidentAPIView(views.APIView):
    #use this if authentication needed before accessing api permission_classes = [permissions.IsAuthenticated]
    filter_backends = [ filters.SearchFilter]
    permission_classes = [permissions.AllowAny]
    def get(self, request, incidentid, *args, **kwargs):
        rawincident = IncidentControl.objects.get(incidentid=incidentid)
        serializer = IncidentControlRawSerializer(rawincident)
        return Response(serializer.data)
    
    def patch(self, request,incidentid, *args, **kwargs):
        rawincident = IncidentControl.objects.get(incidentid=incidentid)
        data = request.data

        rawincident.verifiedby = data.get("verifiedby", rawincident.verifiedby)
        rawincident.date = data.get("date", rawincident.date)
        rawincident.altitude = data.get("altitude", rawincident.altitude)
        rawincident.damage = data.get("damage", rawincident.damage)
        rawincident.impact = data.get("impact", rawincident.impact)
        rawincident.pilotwarning = data.get("pilotwarning", rawincident.pilotwarning)
        rawincident.flightphase = data.get("flightphase", rawincident.flightphase)
        rawincident.aircraftmodel = data.get("aircraftmodel", rawincident.aircraftmodel)
        rawincident.scientificname = data.get("scientificname", rawincident.scientificname)
        rawincident.wildlifenumber = data.get("wildlifenumber", rawincident.wildlifenumber)
        rawincident.wildlifenumberactual = data.get("wildlifenumberactual", rawincident.wildlifenumberactual)
        rawincident.airlineoperator = data.get("airlineoperator", rawincident.airlineoperator)
        rawincident.is_verified = data.get("is_verified", rawincident.is_verified)
        
        rawincident.save()
        serializer = IncidentControlRawSerializer(rawincident)
        return Response(serializer.data)

class IncidentVerify(generics.RetrieveUpdateAPIView):
    pass