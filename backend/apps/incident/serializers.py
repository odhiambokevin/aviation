from rest_framework import serializers
from rest_framework_gis.serializers import GeoFeatureModelSerializer
from .models import Incident

class IncidentSerializer(GeoFeatureModelSerializer):
    '''use this if authentication needed to access serializer fields
        username = serializers.CharField(source="user.username")
        first_name = serializers.CharField(source="user.first_name")
        
        '''
    recordedby = serializers.CharField(source='recordedby.username')
    class Meta:
        model = Incident
        fields = ['incidentid','recordedby','location','incidentdate','precipitation','airport','county','locationremarks','speciestype','speciesname','incidentremarks','image']
        geo_field = 'location'
        # read_only_fields = []
