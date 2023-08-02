"""Models for incidentcontrol app"""
from django.contrib.auth import get_user_model
from django.contrib.gis.db import models
from apps.incident.models import Incident

User = get_user_model()

class Phase(models.TextChoices):
    landing_roll = "landing roll","Landing Roll"
    take_off_run = "take-off run","Take-off Run"
    approach = "approach","Approach"
    climbing = "climbing","Climbing"

class Impact(models.TextChoices):
    zero = "none","None"
    precautionary = "precautionary","Precautionary"
    landing = "landing","Landing"
    flight_cancelled = "flight cancelled","Flight Cancelled"
    engine_shut_down = "engine shutdown","Engine Shut Down"

class Wildlife(models.TextChoices):
    less_than_5 = "1 to 5"
    five_to_50 = "5 to 50"
    more_than_50 = "More than 50"


class IncidentControl(models.Model):
    incidentid = models.OneToOneField(Incident,primary_key=True,related_name="incidentidl2",db_column="incidentid",default="staff", on_delete=models.SET_DEFAULT)
    recordedby = models.ForeignKey(User,related_name="recorder",db_column="recordedby",default=1,on_delete=models.SET_DEFAULT)
    date = models.DateTimeField(null=True,db_column="date")
    altitude = models.IntegerField(blank=True, null=True,db_column="altitude")
    damage = models.BooleanField(default=False,null=True, verbose_name="Damage to Aircraft",db_column="damage")
    impact = models.CharField(choices=Impact.choices,null=True, default=Impact.zero, max_length=100,db_column="impact")
    pilotwarning = models.BooleanField(default=False, null=True,db_column="pilotwarning")
    flightphase = models.CharField(choices=Phase.choices, null=True, default=Phase.take_off_run, max_length=100,db_column="flightphase")
    aircraftmodel = models.CharField(null=True, max_length=100,db_column="aircraftmodel")
    scientificname = models.CharField(null=True, max_length=100,db_column="scientificname")
    wildlifenumber = models.CharField(choices=Wildlife.choices, null=True,default=Wildlife.less_than_5, max_length=100,db_column="wildlifenumber")
    wildlifenumberactual = models.IntegerField(null=True,db_column="wildlifenumberactual")
    airlineoperator = models.CharField(null=True, max_length=100,db_column="airlineoperator")
    is_verified = models.BooleanField(default=False, verbose_name="Verification Status")
    verifiedby = models.ForeignKey(User,related_name="incidentverify",db_column="verifiedby",blank=True,null=True,default=1,on_delete=models.SET_DEFAULT)

    class Meta:
        ordering = ['-date',]
        verbose_name = "Incident Verification"
        verbose_name_plural = "Incident Verification"
        db_table = "incidentcontrol"

    def __str__(self):
        return f"{self.incidentid} recorded by {self.recordedby}"
