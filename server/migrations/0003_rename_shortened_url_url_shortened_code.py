# Generated by Django 5.1.1 on 2024-12-15 16:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('server', '0002_rename_original_url_url_url'),
    ]

    operations = [
        migrations.RenameField(
            model_name='url',
            old_name='shortened_url',
            new_name='shortened_code',
        ),
    ]
