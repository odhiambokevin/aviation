"""Admin settings for airport app"""
from django.contrib.gis import admin
from leaflet.admin import LeafletGeoAdmin
from .models import Airport

class AirportAdmin(LeafletGeoAdmin):
	"""Fields to be displayed"""
	list_display = ('stationid', 'station', 'type', 'county')
	list_filter = ('type',)
	search_fields = ('type',)

admin.site.register(Airport, AirportAdmin)