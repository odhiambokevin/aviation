"""Models for feedback app"""
from django.db import models

class Feedback(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    full_name = models.CharField(max_length=100)
    email = models.EmailField(verbose_name='Email Address')
    subject = models.CharField(max_length=100)
    message = models.TextField()
    posted_on = models.DateField(auto_now_add=True)
  

    class Meta:
        ordering = ['-posted_on',]
        verbose_name = "Feedback"
        verbose_name_plural = "Feedback"
        db_table = "feedback"

    def __str__(self):
        return f"{self.full_name} on {self.posted_on}"
