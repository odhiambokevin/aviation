"""Admin settings for works app"""
from django.contrib import admin
from .models import Work

class WorkAdmin(admin.ModelAdmin):
    """Fields to be displayed"""
    list_display = ['id','title','category','release_date','is_published','image']
    list_filter = ['category','release_date','is_published']
    prepopulated_fields = {'slug': ('title',)}
    list_display_links = ["title"]


admin.site.register(Work, WorkAdmin)