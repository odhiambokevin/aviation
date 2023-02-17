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

class Profile(models.Model):
    user = models.OneToOneField(User,related_name="profile", on_delete=models.CASCADE)
    photo = models.ImageField(default="/profile_default.png")
    gender = models.CharField(choices=Gender.choices, default=Gender.Other, max_length=50)
    station = models.CharField(choices=Station.choices, default=Station.JKIA, max_length=50)
    
    def __str__(self):
        return f"{self.user.username}'s profile"   