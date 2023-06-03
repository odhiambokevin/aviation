"""Models for blog app"""
from django.contrib.auth import get_user_model
import uuid
from django.db import models


User = get_user_model()

class Blogs(models.Model):
    blogid = models.AutoField(primary_key=True, editable=False)
    id = models.UUIDField(default=uuid.uuid4, editable=False, unique=True)
    title = models.CharField(max_length=100)
    slug = models.SlugField(null=False, unique=True)
    body = models.TextField()
    author = models.ForeignKey(User,related_name="blogs", on_delete=models.CASCADE)
    is_published = models.BooleanField(default=False, verbose_name="Publish Status", help_text="Publish Status")
    created_date = models.DateField(auto_now_add=True)
    modified_date = models.DateField(auto_now=True)
    image = models.ImageField(default='default.png', blank=True)

    class Meta:
        ordering = ['-created_date',]
        verbose_name = "Blogs"
        verbose_name_plural = "Blogs"
        db_table = "blogs"

    def __str__(self):
        return self.title
    
    def snippet(self):
        return self.body[:140] + '....'
