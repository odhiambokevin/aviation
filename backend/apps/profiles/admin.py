"""Admin settings for profiles app"""
from django.contrib import admin
from .models import Profile

class ProfileAdmin(admin.ModelAdmin):
    """Fields to be displayed"""
    list_display = ["id", "user", "gender",'designation']
    list_filter = ["gender",'designation']
    list_display_links = ["user"]

admin.site.register(Profile, ProfileAdmin)
