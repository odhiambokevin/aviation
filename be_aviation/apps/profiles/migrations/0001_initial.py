# Generated by Django 5.0.3 on 2024-03-23 07:44

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("airports", "0001_initial"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Profile",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "designation",
                    models.CharField(
                        choices=[
                            ("wcontrol", "Wildife Control Officer"),
                            ("wmanager", "Wildife Control Manager"),
                            ("admin", "admin"),
                        ],
                        default="wcontrol",
                        max_length=20,
                    ),
                ),
                (
                    "photo",
                    models.ImageField(default="/default_photo.png", upload_to=""),
                ),
                (
                    "gender",
                    models.CharField(
                        choices=[
                            ("male", "Male"),
                            ("female", "Female"),
                            ("other", "Other"),
                        ],
                        default="male",
                        max_length=15,
                    ),
                ),
                (
                    "station",
                    models.ForeignKey(
                        default="not_assigned",
                        on_delete=django.db.models.deletion.SET_DEFAULT,
                        related_name="dutystation",
                        to="airports.airport",
                    ),
                ),
                (
                    "user",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="profile",
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
            ],
            options={
                "db_table": "profiles",
            },
        ),
    ]
