# Generated by Django 4.0.3 on 2023-08-02 09:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('incidentcontrol', '0007_incidentcontrol_date_modified_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='incidentcontrol',
            name='date',
            field=models.DateTimeField(auto_now_add=True, db_column='date', null=True),
        ),
    ]