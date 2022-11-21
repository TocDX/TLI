from django.db import models
from imagekit.models import ProcessedImageField
from django.db import models
from imagekit.processors import ResizeToFill
from django.conf import settings
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.
class Text(models.Model):
    title = models.CharField(max_length=50)
    content = models.TextField()
    THEME_CHOICES = (
        ("영화수다", "영화수다"),
        ("영화정보", "영화정보"),
        ("영화리뷰", "영화리뷰"),
    )
    themes = models.CharField(max_length=4, choices=THEME_CHOICES)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    mov_image = ProcessedImageField(
        upload_to="media/",
        processors=[ResizeToFill(720, 480)],
        format="JPEG",
        options={"quality": 100},
    )
        # 작성시간
    created_at = models.DateTimeField(auto_now_add=True)

    # 수정시간
    modified_at = models.DateTimeField(auto_now=True)

    

    like = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name="review_like", blank=True
    )
    
    hits = models.PositiveIntegerField(default=0)

    @property
    def update_hits(self):
        self.hits = self.hits + 1 
        self.save()

class Spotcomment(models.Model):
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    text = models.ForeignKey(Text, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    parent_comment = models.ForeignKey('self', on_delete=models.CASCADE, null=True)