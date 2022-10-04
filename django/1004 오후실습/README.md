## 1. 가상환경 생성

```bash
python -m venv "name"
```

## 2. 가상환경 ON

```bash
source "name"/Scripts/activate
```

## 3. django 설치 및 기록

```bash
pip install django==버전
pip freeze > requirements.txt
```

## 4. 프로젝트 생성

```bash
djagno-admin startproject "name"
```

## 5. app 생성 

```bash
python manage.py startapp "name"
```

## 6. 프로젝트 세팅

- 프로젝트 url에 앱 추가
  - path 추가 후 include

- setting에서 생성된 앱 추가

## 7.  app 세팅

- 생성된 앱에 urls 파일 만들기
  - path 추가 
  - appname 추가
  ```bash
  from django.urls import path
  from . import views
  app_name = 'articles'
  urlpatterns = [
      path('', views.index.html, name='index'),
  ]
  ```
- views 추가
  ```bash
  
  def index(request):
      return render(request, 'articles/index.html')
  ```

- app 폴더안에 templates/articles 생성
  - index.html 생성

## 8 models 추가

  ```bash
    class Article(models.Model):
        title = models.CharField(max_length=20)
        content = models.TextField
        created_at = models.DateTimeField(auto_now_add=True)
        updated_at = models.DateTimeField(auto_now=True)
  ```
- python manage.py makemigrations
- python manage.py migrate

## CRUD

### 1. 게시글 
```bash
def index(request):
    articles = Article.objects.order_by('-pk')
    context = {
        'articles': articles
    }
    return render(request, 'articles/index.html',context)
```

- path('', views.index, name='index'),

### 2. 게시글 생성
```bash
def create(request):
    if request.method == 'POST':
        article_form = ArticleForm(request.POST)
        if article_form.is_valid():
            article_form.save()
            return redirect('articles:index')
    else:
        article_form = ArticleForm()
    context = {
            'article_form' : article_form
    }
    return render(request, 'articles/new.html',context=context)
```
- path('create/', views.create, name='create'),

### 3. 게시글 상세보기

```bash
def detail(request, pk):
    article = Article.objects.get(pk=pk)
    context = {
        'article': article
    }
    return render(request, 'articles/detail.html', context)
```

- path('<int:pk>/', views.detail, name='detail'),

### 4. 게시글 수정

```bash
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
            'article_form' : article_form
    }
    return render(request, 'articles/update.html', context)
```
- path('<int:pk>/update', views.update, name='update'),