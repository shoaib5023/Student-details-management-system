from django.contrib import admin
from studentapp.models import StudentDetails
from django import forms

# Register your models here.


class StudentAdmin(admin.ModelAdmin):
    list_display=("firstName","lastName","skills",)

admin.site.register(StudentDetails, StudentAdmin)