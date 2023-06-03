"""Models for works app"""
from enum import unique
from unittest.util import _MAX_LENGTH
from django.db import models

class Category(models.TextChoices):
    AGRIC = 'agriculture', 'Agriculture',
    BIO = 'biodiversity', 'Biodiversity',
    WAT = 'water', 'Water',
    FACIL = 'facility', 'Facility',

class Work(models.Model):
    id = models.IntegerField(primary_key=True,unique=True)
    title = models.CharField(max_length=100)
    slug = models.SlugField(null=False, unique=True)
    category = models.CharField(max_length=20, choices=Category.choices, default=Category.AGRIC)
    software = models.TextField()
    release_date = models.DateField()
    is_published = models.BooleanField(default=False, verbose_name="Publish Status", help_text="Publish Status")
    image = models.ImageField(default='default.png', blank=True)

    class Meta:
        ordering = ['title']
        verbose_name = "Works"
        verbose_name_plural = "Works"
        db_table = "works"

    def __str__(self):
        return self.title
        