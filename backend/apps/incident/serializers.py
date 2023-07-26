"""Serializers for incident app"""
from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Incident

class IncidentSerializer(GeoFeatureModelSerializer):
    '''use this if authentication needed to access serializer fields
        username = serializers.CharField(source="user.username")
        first_name = serializers.CharField(source="user.first_name")
        
        '''
    airport = serializers.CharField(source='airport.station')
    recordedby = serializers.CharField(source='recordedby.username')
    longitude = serializers.SerializerMethodField()
    latitude = serializers.SerializerMethodField()
    class Meta:
        model = Incident
        fields = ['incidentid','recordedby','location','longitude','latitude','incidentdate','precipitation','airport','locationremarks','speciestype','speciesname','incidentremarks','image']
        geo_field = 'location'
        # read_only_fields = []
    def get_latitude(self, obj):
        return obj.location.y
    
    def get_longitude(self, obj):
        return obj.location.x
