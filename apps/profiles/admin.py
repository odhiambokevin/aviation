from django.contrib import admin
from .models import Profile

class ProfileAdmin(admin.ModelAdmin):
    list_display = ["id", "user", "gender"]
    list_filter = ["gender", "station"]
    list_display_links = ["user"]

admin.site.register(Profile, ProfileAdmin)
