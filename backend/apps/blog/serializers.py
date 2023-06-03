"""Serializers for blog app"""
from rest_framework import serializers
from .models import Blogs
from django.contrib.auth import get_user_model

User = get_user_model()

class BlogsSerializer(serializers.ModelSerializer):
    author = serializers.CharField(source="author.username")
    '''use this if authentication needed to access serializer fields
        username = serializers.CharField(source="user.username")
        first_name = serializers.CharField(source="user.first_name")
        
        '''
    
    class Meta:
        model = Blogs
        fields = ['id','title','slug','body','author','modified_date','image','created_date']
        # read_only_fields = []