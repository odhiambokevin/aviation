# Generated by Django 4.0.3 on 2022-09-27 04:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(default='/profile_default.png', upload_to='')),
                ('gender', models.CharField(choices=[('Male', 'Male'), ('Female', 'Female'), ('Other', 'Other')], default='Other', max_length=50)),
                ('station', models.CharField(choices=[('Malindi', 'Malindi'), ('Wilson', 'Wilson'), ('jkia', 'Jkia')], default='jkia', max_length=50)),
                ('is_wcontrol', models.BooleanField(default=True, help_text='Wildlife Control Officer', verbose_name='Wildlife Control Officer')),
                ('is_wmanager', models.BooleanField(default=False, help_text='Wildlife Control Manager', verbose_name='Wildlife Control Manager')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]