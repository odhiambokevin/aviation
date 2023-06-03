"""Admin settings for banner app"""
from django.contrib import admin
from .models import Banner

class BannerAdmin(admin.ModelAdmin):
	"""Fields to be displayed"""
	list_display = ('title', 'desc')

admin.site.register(Banner, BannerAdmin)
