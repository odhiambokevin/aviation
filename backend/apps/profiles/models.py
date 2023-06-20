"""Models for profiles app"""
from django.contrib.auth import get_user_model
from django.db import models
from apps.airports.models import Airport

User = get_user_model()

class Gender(models.TextChoices):
    Male = "Male"
    Female = "Female"
    Other = "Other"

class Designation(models.TextChoices):
    WCO = 'wcontrol', 'Wildife Control Officer'
    WMAN = 'wmanager', 'Wildife Control Manager'
    ADMIN = 'admin', 'admin'

class Profile(models.Model):
    user = models.OneToOneField(User,related_name="profile", on_delete=models.CASCADE)
    designation = models.CharField(max_length=20, choices=Designation.choices,default=Designation.WCO)
    photo = models.ImageField(default="/profile_default.png")
    gender = models.CharField(choices=Gender.choices, default=Gender.Other, max_length=50)
    # station = models.ForeignKey(Airport,related_name='dutystation',default=1, on_delete=models.DO_NOTHING)
    
    def __str__(self):
        return f"{self.user.username}'s profile"   
    class Meta:
        db_table = "profile"