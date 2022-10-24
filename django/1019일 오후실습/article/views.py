from django.shortcuts import render,redirect
from django.contrib import messages
from .models import Article, Comment
from .forms import ArticleForm, CommentForm
from django.contrib.auth.decorators import login_required

# Create your views here.

def main(request):
    return render(request,'article/main.html')

def index(request):
    articles = Article.objects.order_by('-pk')
    context = {
        'article':articles
    }
    return render(request, 'article/index.html', context)
    
@login_required
def create(request):
    if request.method == 'POST':
        article_form = ArticleForm(request.POST, request.FILES)
        if article_form.is_valid():
            article = article_form.save(commit=False)
            article.user = request.user
            article.save()
            messages.success(request, '글 작성이 완료되었습니다.')
        return redirect('article:index')
    else:
        article_form = ArticleForm()
    context = {
            'article_form': article_form
        }
    return render(request, 'article/create.html', context = context)

def detail(request,pk):
    articles = Article.objects.get(pk=pk)
    comment_form = CommentForm()
    context ={
        'article': articles,
        'comment_form': comment_form,
        'comments': articles.comment_set.all(), 
    }
    return render(request, 'article/detail.html', context)

@login_required
def update(request, pk):
    articles = Article.objects.get(pk=pk)
    if request.user == articles.user:
        if request.method == 'POST':
            article_form = ArticleForm(request.POST, request.Files, instance=articles)
            if article_form.is_valid():
                article_form.save()
                return redirect('article:index', articles.user)
        else:
            article_form = ArticleForm(instance=articles)
        context = {
            'article_form': article_form
        }
        return render(request, 'article/update.html',context)
    else:
        messages.warning('로그인한 사람만 작성이 가능합니다')
        return redirect('article:index', articles.pk)