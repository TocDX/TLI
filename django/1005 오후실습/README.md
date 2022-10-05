## Django 가상환경 생성

>python -m venv venv

## Django 가상환경 실행

>source 가상환경이름/Scripts/activate

## Django 설치

>pip install django==버전

## 프로젝트 생성

>django-admin startproject 프로젝트이름

## 앱 생성 

>python manage.py startapp 앱 이름

## 프로젝트 세팅 설정

```html
INSTALLED_APPS = [
    '새로만든 app 추가',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

## 앱 모델 설정

> 필드 설정해 python manage.py makemigrations, python manage.py migrate
```html
from django.db import models

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_lenght=80)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

## 프로젝트 urls 설정

```html
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('앱 이름', include('앱이름의 urls'))
]

```

## 앱 폴더내 urls 파일 생성

>app_name 설정 url path 설정

```html
from django.urls import path
from . import views

app_name = 'articles'

urlpatterns = [
   path('', views.index, name='index')
]
```
## forms 설정

>forms.py 생성

```html
from django import forms
from .models import Article


class ArticleForm(forms.ModelForm):
    
    class Meta:
        model = Article
        fields = '__all__'
```


## urls 설정 후 views 설정

> index url을 받아줄 함수

```html
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'articles/index.html')
```

## templates/앱네임 생성


## index html 작성

```html
<a href="url 'articles:create' ">글 작성</a>
```

## create urls 작성

```html
def create(request):
    if request.method == 'POST':
        article_form = ArticleForm(request.POST)
        if article_form.is_valid():
            article_form.save()
            return redirect('articles:index')
    else:
        article_form = ArticleForm()
    context = {
        'article_form':article_form
    }
    return render(request,'articles/new.html', context=context)
```

## new ttml 작성

```html
  <form action="{% url 'articles:create' %}" method="POST">
    {% csrf_token %}
    {{ article_form.as_p }}
    <input type="submit" value="글 작성">

  </form>
```

## detail urls 설정

```html
path('<int:pk>/', views.detail, name='detail'),
```

## detail views 설정

```html
def detail(request, pk):
    article = Article.objects.get(pk=pk)
    context = {
        'article' : article
    }
    return render(request, 'articles/detail.html', context)
```

## detial html 설정

```html
<h1>{{ article.pk }}번 게시글</h1>
<p>{{ article.created_at }} | {{ article.updated_at }}</p>
<p>{{ article.content }}</p>
<a href="{% url 'articles:update' article.pk %}">수정하기</a>
```

## update url 설정

```html
path('<int:pk>/update', views.update, name='update'),
```

## update views 설정

```html
def update(request, pk):
    article = Article.objects.get(pk=pk)
    if request.method == 'POST':
        article_form = ArticleForm(request.POST, instance=article)
        if article_form.is_valid():
            article_form.save()
            return redirect('articles:detail', article.pk)
    else:
        article_form = ArticleForm(instance=article)
    context = {
        'article_form': article_form,
    }
    return render(request, 'article/update.html',context)
```

## update html 

```html
<h1>글 수정하기</h1>

<form action="" method="POST">
  {% csrf_token %}
  {{ article_form.as_p }}
  <input type="submit" value="수정">
</form>
```