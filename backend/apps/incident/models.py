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
    incidentid = models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False,db_column='incidentid')
    recordedby = models.ForeignKey(User,related_name="incidents",db_column="recordedby",default=1,on_delete=models.SET_DEFAULT)
    incidentdate = models.DateTimeField(auto_now_add=True,db_column="incidentdate")
    precipitation = models.CharField(choices=Precipitation.choices, default=Precipitation.Zero, max_length=50,db_column="precipiation")
    airport =  models.ForeignKey(Airport,related_name='incidentairport',db_column="airport",default=1,on_delete=models.SET_DEFAULT)
    location = models.PointField(srid=4326,db_column="location")
    locationremarks = models.TextField(blank=True,db_column="locationremarks")
    speciestype = models.CharField(choices=Species.choices, default=Species.Bird, max_length=50,db_column="speciestype")
    speciesname = models.CharField(max_length=100, blank=True,db_column="speciesname")
    incidentremarks = models.TextField(blank=True,db_column="incidentremarks")
    image = models.ImageField(default='default.png',null=True, blank=True,db_column="image")

    class Meta:
        ordering = ['-incidentdate',]
        verbose_name = "Incidents"
        verbose_name_plural = "Incidents"
        db_table = "incident"

    def __str__(self):
        return f"Incident ID: {self.incidentid} Involving: {self.speciestype}" 

    
