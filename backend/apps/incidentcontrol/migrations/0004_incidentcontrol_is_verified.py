# Generated by Django 4.0.3 on 2023-06-24 12:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('incidentcontrol', '0003_alter_incidentcontrol_aircraftmodel_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='incidentcontrol',
            name='is_verified',
            field=models.BooleanField(default=False, verbose_name='Verification Status'),
        ),
    ]