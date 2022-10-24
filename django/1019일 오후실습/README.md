## 1

> python -m venv venv (가상환경 설치)

## 2

> source venv/Scripts/activate (가상환경 실행)

## 3

> pip django==3.2.12 (장고 설치)

## 4

> pip freeze > requirements.txt (설치 환경)

## 5

> pip install -r requirements.txt (쓰고 있던 설치들 가져오기)

## 6

> django-admin startproject pjt . (프로젝트 생성)

## 7

> python manage.py startapp article (앱 생성)

## 8

> path('article/', include('article.urls')), (url 추가)

## 9

```python
INSTALLED_APPS = [ # 인스톨 된 app 등록
    'article',
    'django_bootstrap5',
    'django_extensions',
    'imagekit',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

```python
TEMPLATES = [ # 공통적으로 쓸 templates 등록
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [ BASE_DIR / 'pjt' / 'templates'],
```

```python
MEDIA_ROOT = BASE_DIR / 'images' # static image 사용하기 위해 등록
MEDIA_URL = '/media/'

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# User Model
AUTH_USER_MODEL = 'accounts.User' # 유저모델 등록

# Message Framework
# https://docs.djangoproject.com/en/4.1/ref/contrib/messages/
MESSAGE_STORAGE = 'django.contrib.messages.storage.cookie.CookieStorage'
```

## 10

> 만들어둔 app 폴더에 urls.py 생성

## 11

```python
# url 기본 설정
from django.urls import path
from . import views

app_name = 'article'

urlpatterns = [

]

```

## 12

> html 파일을 만들기 위한 templates 폴더 생성 후 html 생성

## 13

```python
# 모델 설정
from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
# Create your models here.
from django.conf import settings

class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    title = models.CharField(max_length=80)
    content = models.TextField()
    image = ProcessedImageField(upload_to='images/', blank=True,
                                processors=[ResizeToFill(1200,960)],
                                format='JPEG',
                                options={'quality': 80})
```

> 모델 설정 후 python manage.py makemigrations, python manage.py migrate 해주기

## 14

```python
# article 모델에서받아줄 필드들
from django import forms
from .models import Article, Comment

class ArticleForm(forms.ModelForm):

    class Meta:
        model = Article
        fields = ['title', 'content', 'image']
```

> forms.py 내장 폼을 받기 위해 생성해주기

## 15

> 공통적으로 쓰일 navbar를 위한 base.html 제작
