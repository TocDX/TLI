from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.
class Info(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    image = ProcessedImageField(
        upload_to="media/",
        processors=[ResizeToFill(720, 480)],
        format="JPEG",
        options={"quality": 100},
    )
        # 작성시간
    created_at = models.DateTimeField(auto_now_add=True)
    # 수정시간
    modified_at = models.DateTimeField(auto_now=True)

    like = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="info_like", blank=True)
    hits = models.PositiveIntegerField(default=0)

    @property
    def update_hits(self):
        self.hits = self.hits + 1 
        self.save()

class Infocomment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    text = models.ForeignKey(Info, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)