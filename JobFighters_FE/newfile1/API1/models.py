from django.db import models

# Create your models here.
class Student(models.Model):
    email=models.CharField(primary_key=True,max_length=40)
    password=models.CharField(max_length=20)
    firstname=models.CharField(max_length=50)
    lastname=models.CharField(max_length=30)
    regtype=models.CharField(max_length=30,default='Student')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.email

