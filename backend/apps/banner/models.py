"""Models for banner app"""
from django.db import models

class Banner(models.Model):
    title = models.CharField(max_length=100)
    desc = models.TextField()

    class Meta:
        """How the model is shown"""
        ordering = ['title']
        db_table = "banner"

    def __str__(self):
        return self.title
        