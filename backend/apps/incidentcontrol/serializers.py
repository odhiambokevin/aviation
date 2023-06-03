"""Serializers for incidentcontrol app"""
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import IncidentControl

class IncidentControlSerializer(ModelSerializer):
    recordedby = serializers.CharField(source='recordedby.recordedby')
    class Meta:
        model = IncidentControl
        fields = '__all__'
        # read_only_fields = []