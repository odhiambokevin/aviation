"""Models for incident app"""
from django.contrib.auth import get_user_model
import uuid
from django.contrib.gis.db import models

User = get_user_model()

class Airport(models.TextChoices):
    JKIA = "JKIA"
    MOI = "MOI"
    KIA = "KIA"

class Counties(models.TextChoices):
    Nairobi = "Nairobi"
    Mombasa = "Mombasa"
    Kisumu = "Kisumu"

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
    recordedby = models.ForeignKey(User,related_name="incidents",db_column="recordedby",default="staff",on_delete=models.SET_DEFAULT)
    incidentdate = models.DateTimeField(auto_now_add=True)
    precipitation = models.CharField(choices=Precipitation.choices, default=Precipitation.Zero, max_length=50)
    airport =  models.CharField(choices=Airport.choices, default=Airport.JKIA, max_length=50)
    county = models.CharField(choices=Counties.choices, default=Counties.Nairobi, max_length=50)
    location = models.PointField(srid=4326)
    locationremarks = models.TextField()
    speciestype = models.CharField(choices=Species.choices, default=Species.Bird, max_length=50)
    speciesname = models.CharField(max_length=100)
    incidentremarks = models.TextField()
    image = models.ImageField(default='default.png',null=True, blank=True)

    class Meta:
        ordering = ['-incidentdate',]
        verbose_name = "Incidents"
        verbose_name_plural = "Incidents"
        db_table = "incident"

    def __int__(self):
        return self.incidentid

    
