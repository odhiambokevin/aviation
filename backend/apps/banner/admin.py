"""Test for Api Doc"""
from django.contrib import admin
from .models import Banner

class BannerAdmin(admin.ModelAdmin):
	"""List to be displayed"""
	list_display = ('title', 'desc')

admin.site.register(Banner, BannerAdmin)
