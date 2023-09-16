"""Admin settings for feedback app"""
from django.contrib import admin
from .models import Feedback

class FeedbackAdmin(admin.ModelAdmin):
	"""Fields to be displayed"""
	list_display = ('id','full_name', 'email', 'subject', 'posted_on')
	list_filter = ('email', 'posted_on')
	search_fields = ('posted_on',)
	list_display_links = ('full_name',)

	
admin.site.register(Feedback, FeedbackAdmin)