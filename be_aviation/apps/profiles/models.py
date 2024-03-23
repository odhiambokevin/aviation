"""Models for profiles app"""
from django.conf import settings
from django.db import models
from apps.airports.models import Airport


class Gender(models.TextChoices):
    """codeBaseValue = 'databaseValue','adminDisplayValue"""
    Male = "male","Male"
    Female = "female","Female"
    Other = "other","Other"



class Designation(models.TextChoices):
    """codeBaseValue = 'databaseValue','adminDisplayValue"""
    Wco = "wcontrol", "Wildife Control Officer"
    Wman = "wmanager", "Wildife Control Manager"
    Admin = "admin", "admin"


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, related_name="profile", on_delete=models.CASCADE)
    designation = models.CharField(max_length=20, choices=Designation.choices, default=Designation.Wco)
    photo = models.ImageField(default="/default_photo.png")
    gender = models.CharField(choices=Gender.choices, default=Gender.Male, max_length=15)
    station = models.ForeignKey(Airport,related_name='dutystation',default="not_assigned", on_delete=models.SET_DEFAULT)

    def __str__(self):
        return f"{self.user.username}'s profile"

    class Meta:
        db_table = "profiles"

    @property
    def get_station(self):
        return self.station.station

