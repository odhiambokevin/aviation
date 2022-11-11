from django.contrib import admin
from .models import Blogs

class BlogsAdmin(admin.ModelAdmin):
	list_display = ('title', 'is_published', 'author', 'created_date','modified_date', 'image')
	list_filter = ('author', 'title', 'created_date', 'modified_date')
	search_fields = ('author', 'title', 'created_date')
	prepopulated_fields = {'slug': ('title',)}

admin.site.register(Blogs, BlogsAdmin)
