from django.db import models
from django.conf import settings
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
# Create your models here.
class Community(models.Model):
    title = models.CharField(max_length=20)
    content = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = [
        (None, "선택"),
        ("스포츠", "스포츠"),
        ("게임", "게임"),
        ("취미", "취미"),
    ]
    category = models.CharField(max_length=5, choices=category)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    like = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="talk_like", blank=True
    )
    image = ProcessedImageField(
        upload_to="media/",
        processors=[ResizeToFill(720, 480)],
        format="JPEG",
        options={"quality": 100},
       
    )
    hits = models.PositiveIntegerField(default=0)
    @property
    def update_hits(self):
        self.hits = self.hits + 1 
        self.save()

class Comcomment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    community = models.ForeignKey(Community, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)