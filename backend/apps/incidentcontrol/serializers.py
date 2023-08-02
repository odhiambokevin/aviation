"""Serializers for incidentcontrol app"""
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import IncidentControl
from apps.incident.models import Incident
from apps.incident.serializers import IncidentSerializer

class IncidentControlRawSerializer(ModelSerializer):
    recordedby = serializers.CharField(source='recordedby.username')
    airport = serializers.CharField(source='incidentid.airport')
    
    class Meta:
        model = IncidentControl
        fields = ["incidentid","recordedby","verifiedby","date","date_modified","airport",
                  "altitude","damage","impact","pilotwarning","flightphase",
                  "aircraftmodel","scientificname","wildlifenumber","wildlifenumberactual",
                  "airlineoperator","is_verified"]
        
        
class IncidentControlSerializer(ModelSerializer):
    recordedby = serializers.CharField(source='recordedby.username')
    verifiedby = serializers.CharField(source='verifiedby.username')
    airport = serializers.CharField(source='incidentid.airport')
    class Meta:
        model = IncidentControl
        fields = ["incidentid","recordedby","verifiedby","date","date_modified","airport",
                  "altitude","damage","impact","pilotwarning","flightphase",
                  "aircraftmodel","scientificname","wildlifenumber","wildlifenumberactual",
                  "airlineoperator"]
        # read_only_fields = []