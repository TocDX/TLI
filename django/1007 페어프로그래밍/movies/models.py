from django.db import models

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    movie_name = models.TextField()
    grade = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)