"""Models for profiles app"""
from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

class Gender(models.TextChoices):
    Male = "Male"
    Female = "Female"
    Other = "Other"

class Station(models.TextChoices):
    Malindi = "Malindi"
    Wilson = "Wilson"
    JKIA = "jkia"

class Designation(models.TextChoices):
    WCO = 'wcontrol', 'Wildife Control Officer'
    WMAN = 'wmanager', 'Wildife Control Manager'

class Profile(models.Model):
    user = models.OneToOneField(User,related_name="profile", on_delete=models.CASCADE)
    designation = models.CharField(max_length=20, choices=Designation.choices,default=Designation.WCO)
    photo = models.ImageField(default="/profile_default.png")
    gender = models.CharField(choices=Gender.choices, default=Gender.Other, max_length=50)
    station = models.CharField(choices=Station.choices, default=Station.JKIA, max_length=50)
    
    def __str__(self):
        return f"{self.user.username}'s profile"   
    class Meta:
        db_table = "profile"