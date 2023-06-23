from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework import serializers
from .models import Airport

class AirportSerializer(GeoFeatureModelSerializer):
    
    class Meta:
        model = Airport
        geo_field = "geom"
        fields = ['stationID', 'station', 'type', 'county', 'geom',]