"""Serializers for works app"""
from rest_framework import serializers
from .models import Work

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = ['id','title','slug','category','software','release_date','is_published','image']