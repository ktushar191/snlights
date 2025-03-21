from django.db import models

# Create your models here.
from django.db import models

class Company(models.Model):
    company_name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=10)
    other_info = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.company_name



