# Generated by Django 4.0.3 on 2023-04-22 11:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_alter_blogs_options_rename_date_blogs_modified_date_and_more'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='blogs',
            table='blogs',
        ),
    ]