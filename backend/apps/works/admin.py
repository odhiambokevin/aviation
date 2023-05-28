from django.contrib import admin
from .models import Work

class WorkAdmin(admin.ModelAdmin):
    list_display = ['id','title','category','release_date','is_published','image']
    list_filter = ['category','release_date','is_published']
    prepopulated_fields = {'slug': ('title',)}
    list_display_links = ["title"]


admin.site.register(Work, WorkAdmin)