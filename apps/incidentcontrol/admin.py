from django.contrib import admin
from .models import IncidentControl

class IncidentControlAdmin(admin.ModelAdmin):
	list_display = ('get_incidentid', 'get_recordedby', 'verifiedby', 'date', 'impact', 'pilotwarning','flightphase', 'airlineoperator')
	list_filter = ('verifiedby', 'date', 'impact')
	search_fields = ('verifiedby',)

	def get_incidentid(self, obj):
		return obj.incidentid.incidentid
	
	def get_recordedby(self, obj):
		return obj.recordedby.recordedby

admin.site.register(IncidentControl, IncidentControlAdmin)