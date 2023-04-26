from django.contrib import admin
from leaflet.admin import LeafletGeoAdmin
from .models import Incident

class IncidentAdmin(LeafletGeoAdmin):
	list_display = ('incidentid', 'recordedby', 'incidentdate', 'airport')
	list_filter = ('recordedby', 'incidentdate', 'airport')
	search_fields = ('recordedby',)

admin.site.register(Incident, IncidentAdmin)
