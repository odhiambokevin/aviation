"""Models for incident app"""
from django.contrib.auth import get_user_model
import uuid
from django.contrib.gis.db import models
from apps.airports.models import Airport

User = get_user_model()

class Species(models.TextChoices):
    Mammal = "Mammal"
    Bird = "Bird"
    Other = "Other"

class Precipitation(models.TextChoices):
    Lightrain = "Light Rain"
    Heavyfog = "Heavy Fog"
    Fog = "Fog"
    Zero = "None"

class Incident(models.Model):
    incidentid = models.AutoField(primary_key=True, editable=False,db_column="incidentid")
    recordedby = models.ForeignKey(User,related_name="incidents",db_column="recordedby",default='staff',on_delete=models.SET_DEFAULT)
    incidentdate = models.DateTimeField(auto_now_add=True)
    precipitation = models.CharField(choices=Precipitation.choices, default=Precipitation.Zero, max_length=50)
    airport =  models.ForeignKey(Airport,related_name='incidentairport',to_field='station',db_column="airport",default="set_airport",on_delete=models.SET_DEFAULT)
    location = models.PointField(srid=4326)
    # longitude = models.DecimalField(max_digits=22, decimal_places=16)
    # latitude = models.DecimalField(max_digits=22, decimal_places=16)
    locationremarks = models.TextField(blank=True)
    speciestype = models.CharField(choices=Species.choices, default=Species.Bird, max_length=50)
    speciesname = models.CharField(max_length=100, blank=True)
    incidentremarks = models.TextField(blank=True)
    image = models.ImageField(default='default.png',null=True, blank=True)

    class Meta:
        ordering = ['-incidentdate',]
        verbose_name = "Incidents"
        verbose_name_plural = "Incidents"
        db_table = "incident"

    def __str__(self):
        return f"Incident ID: {self.incidentid} Involving: {self.speciestype}" 

    
