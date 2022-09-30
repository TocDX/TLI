from django.shortcuts import render,redirect
from .models import review
# Create your views here.
def index(request):
    reviews = review.objects.all()
    context = {
        'reviews': reviews,
    }
    return render(request, 'review/index.html', context)


def create(request):
    title = request.GET.get('title')
    content = request.GET.get('content')
    
    review.objects.create(
        title = title,
        content = content,
    )
    context = {
    'title': title,
    'content': content,
  }
    
    return redirect('review:index')

def new(request):
    return render(request, 'review/new.html')

def detail(request, pk_):
    reviews = review.objects.get(pk=pk_)
    context = {
        "reviews" : reviews,
    }
    return render(request, 'review/detail.html', context)

def delete(request, pk):
    reviews = review.objects.get(pk=pk)
    reviews.delete()


    return redirect('review:index')

def edit(request, pk):
    reviews = review.objects.get(pk=pk)
    context = {
        'reviews': reviews
    }
    return render(request, 'review/edit.html', context)

def update(request, pk):
    reviews = review.objects.get(pk=pk)
    title_ = request.GET.get('title')
    content_ = request.GET.get('content')

    reviews.title = title_
    reviews.content = content_

    reviews.save()
    return redirect('review:detail', reviews.pk)