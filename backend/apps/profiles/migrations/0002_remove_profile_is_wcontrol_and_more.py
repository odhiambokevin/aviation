# Generated by Django 4.0.3 on 2023-01-14 10:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='is_wcontrol',
        ),
        migrations.RemoveField(
            model_name='profile',
            name='is_wmanager',
        ),
    ]