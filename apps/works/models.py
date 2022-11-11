from enum import unique
from unittest.util import _MAX_LENGTH
from django.db import models

categories = (
    ('agriculture','agriculture'),
    ('biodiversity','biodiversity'),
    ('water','water'),
    ('facility','facility'),
)

class Work(models.Model):
    id = models.IntegerField(primary_key=True,unique=True)
    title = models.CharField(max_length=100)
    slug = models.SlugField(null=False, unique=True)
    category = models.CharField(max_length=20, choices=categories, default='agriculture')
    software = models.TextField()
    release_date = models.DateField()
    is_published = models.BooleanField(default=False, verbose_name="Publish Status", help_text="Publish Status")
    image = models.ImageField(default='default.png', blank=True)

    class Meta:
        ordering = ['title']
        verbose_name = "Works"
        verbose_name_plural = "Works"

    def __str__(self):
        return self.title
        