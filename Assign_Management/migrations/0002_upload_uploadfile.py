# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-11-22 21:16
from __future__ import unicode_literals

import django.core.files.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Assign_Management', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='upload',
            name='Uploadfile',
            field=models.FileField(default='None', storage=django.core.files.storage.FileSystemStorage(location='D:/work/Django_Project/KMUTT_FIBO/241_Grading/SamingDev/media'), upload_to=''),
            preserve_default=False,
        ),
    ]