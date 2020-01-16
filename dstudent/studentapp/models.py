
from django.db import models

# Create your models here.
class StudentDetails(models.Model):
    firstName=models.CharField(max_length=240,help_text="enter student first name")
    lastName=models.CharField(max_length=240,help_text="enter student last name")
    skills=models.CharField(max_length=240,help_text="enter students skills")

    def __str__(self):
        return self.firstName

    def skillsList(self):
        return list(str(self.skills).split(","))
        