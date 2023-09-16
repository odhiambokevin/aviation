"""Admin settings for incidentcontrol app"""
from django.contrib import admin
from .models import IncidentControl

class IncidentControlAdmin(admin.ModelAdmin):
	"""Fields to be displayed"""
	list_display = ('get_incidentid','is_verified', 'recordedby', 'verifiedby', 'date','date_modified', 'impact', 'pilotwarning','flightphase', 'airlineoperator')
	list_filter = ('verifiedby','is_verified', 'date', 'impact')
	search_fields = ('verifiedby',)

	@admin.display(description='Incident ID')
	def get_incidentid(self, obj):
		return obj.incidentid.incidentid
	
	# def get_recordedby(self, obj):
	# 	"""Returns the string name for this field"""
	# 	return obj.recordedby.recordedby

admin.site.register(IncidentControl, IncidentControlAdmin)