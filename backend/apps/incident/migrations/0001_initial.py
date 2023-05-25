# Generated by Django 4.0.3 on 2023-04-23 17:30

from django.conf import settings
import django.contrib.gis.db.models.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Incident',
            fields=[
                ('incidentid', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('incidentdate', models.DateTimeField(auto_now_add=True)),
                ('precipitation', models.CharField(choices=[('Light Rain', 'Lightrain'), ('Heavy Fog', 'Heavyfog'), ('Fog', 'Fog'), ('None', 'Zero')], default='None', max_length=50)),
                ('airport', models.CharField(choices=[('JKIA', 'Jkia'), ('MOI', 'Moi'), ('KIA', 'Kia')], default='JKIA', max_length=50)),
                ('county', models.CharField(choices=[('Nairobi', 'Nairobi'), ('Mombasa', 'Mombasa'), ('Kisumu', 'Kisumu')], default='Nairobi', max_length=50)),
                ('location', django.contrib.gis.db.models.fields.PointField(srid=4326)),
                ('locationremarks', models.TextField()),
                ('speciestype', models.CharField(choices=[('Mammal', 'Mammal'), ('Bird', 'Bird'), ('Other', 'Other')], default='Bird', max_length=50)),
                ('speciesname', models.CharField(max_length=100)),
                ('incidentremarks', models.TextField()),
                ('image', models.ImageField(blank=True, default='default.png', upload_to='')),
                ('recordedby', models.ForeignKey(default='staff', on_delete=django.db.models.deletion.SET_DEFAULT, related_name='incidents', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Incidents',
                'verbose_name_plural': 'Incidents',
                'db_table': 'incident',
                'ordering': ['-incidentdate'],
            },
        ),
    ]