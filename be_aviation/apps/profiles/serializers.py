"""Serializers for profiles app"""

from django.forms import CharField
from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username")
    first_name = serializers.CharField(source="user.first_name")
    last_name = serializers.CharField(source="user.last_name")
    email = serializers.EmailField(source="user.email")
    full_name = serializers.SerializerMethodField(read_only=True)
    station = serializers.SerializerMethodField(source="get_station")

    class Meta:
        model = Profile
        fields = ["id","username","email","first_name","last_name","full_name","gender","station","designation","photo"]

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)
    #     if instance.is_wmanager:
    #         representation["is_wmanager"] = True
    #     return representation


class UpdateProfileSerializer(serializers.ModelSerializer):
    designation = serializers.CharField(source="user.designation")

    class Meta:
        model = Profile
        fields = ["designation","email", "photo"]
