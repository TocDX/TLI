## 가상환경 생성

> python -m venv venv

## 가상환경 실행

> source venv/Scripts/activate

## Django 설치

> pip install django==3.2.13

## 프로젝트 생성

> django-admin startproject pjt .

## app 생성

> python manage.py startapp movies

## 프로젝트 urls 설정

```html
from django.contrib import admin from django.urls import path,include
urlpatterns = [ path('admin/', admin.site.urls), path('movies/',
include('movies.urls')), ]
```

## 프로젝트 세팅 설정

```html
INSTALLED_APPS = [ 'movies', 'django.contrib.admin', 'django.contrib.auth',
'django.contrib.contenttypes', 'django.contrib.sessions',
'django.contrib.messages', 'django.contrib.staticfiles', ]
```

## bootstrap base파일 설정

> templates 폴더 생성 후 base.html 생성

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, intial-scale=1.0" />
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
      crossorigin="anonymous"
    />
    <!-- JavaScript Bundle with Popper -->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
      crossorigin="anonymous"
    ></script>
    <title>Document</title>
  </head>

  <body>
    <header></header>
    {% block content %}{% endblock %}
  </body>
</html>
```

## app index 설정

```html
from django.urls import path from . import views app_name = 'movies' urlpatterns
= [ path('', views.index, name='index'), ]
```

## app index views 설정

```html
from django.shortcuts import render # Create your views here. def
index(request): return render(request, 'movies/index.html')
```

## app index.html 생성

> templates/movies 생성 후 index.html 생성

## models 설정

```html
class Movie(models.Model): title = models.CharField(max_length = 30) summary =
models.TextField() running_time = models.IntegerField()
```

> python manage.py makemigrations
> python manage.py migrate

## forms 설정

```html
from django import forms from .models import Movie class
MovieForm(forms.ModelForm): class Meta: model = Movie fields = '__all__'
```
