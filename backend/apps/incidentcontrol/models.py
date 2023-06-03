"""Models for incidentcontrol app"""
from django.contrib.auth import get_user_model
from django.contrib.gis.db import models
from apps.incident.models import Incident

User = get_user_model()

class Phase(models.TextChoices):
    landing_roll = "Landing Roll"
    take_off_run = "Take Off Run"
    approach = "Approach"
    climbing = "Climbing"

class Impact(models.TextChoices):
    zero = "None"
    precautionary = "Precautionary"
    landing = "Landing"
    flight_cancelled = "Flight Cancelled"
    engine_shut_down = "Engine Shut Down"

class Wildlife(models.TextChoices):
    less_than_5 = "1 to 5"
    five_to_50 = "5 to 50"
    more_than_50 = "More than 50"


class IncidentControl(models.Model):
    incidentid = models.OneToOneField(Incident, related_name="incidentidl2",db_column="incidentid",default="staff", on_delete=models.SET_DEFAULT)
    recordedby = models.ForeignKey(Incident,related_name="recorder",db_column="recordedby",default="staff",on_delete=models.SET_DEFAULT)
    date = models.DateTimeField(null=True)
    altitude = models.IntegerField(blank=True, null=True)
    damage = models.BooleanField(default=False,null=True, verbose_name="Damage to Aircraft")
    impact = models.CharField(choices=Impact.choices,null=True, default=Impact.zero, max_length=100)
    pilotwarning = models.BooleanField(default=False, null=True)
    flightphase = models.CharField(choices=Phase.choices, null=True, default=Phase.take_off_run, max_length=100)
    aircraftmodel = models.CharField(null=True, max_length=100)
    scientificname = models.CharField(null=True, max_length=100)
    wildlifenumber = models.CharField(choices=Wildlife.choices, null=True,default=Wildlife.less_than_5, max_length=100)
    wildlifenumberactual = models.IntegerField(null=True)
    airlineoperator = models.CharField(null=True, max_length=100)
    verifiedby = models.ForeignKey(User,related_name="incidentverify",db_column="verifiedby",null=True,default="staff",on_delete=models.SET_DEFAULT)

    class Meta:
        ordering = ['-date',]
        verbose_name = "Incident Verification"
        verbose_name_plural = "Incident Verification"
        db_table = "incidentcontrol"

    def __int__(self):
        return self.incidentid
