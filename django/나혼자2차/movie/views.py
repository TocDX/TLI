from django.shortcuts import render, redirect,get_object_or_404
from movie.models import Text
from .models import Spotcomment
from django.contrib.auth.decorators import login_required
from django.db.models import Count
from django.core.paginator import Paginator
from .forms import CommentForm, SpotForm
from . import forms
from . import models
from info.models import Info
from talk.models import Community
# Create your views here.


def index(request):
    info = Info.objects.all()
    inf = info.annotate(like_count=Count("like"))
    infos = inf.order_by('-like_count')[0:6]
    movies = Text.objects.all()
    mov = movies.annotate(like_count=Count("like"))
    movie = mov.order_by("-like_count")[0:6]
    talks = Community.objects.all()
    tal = talks.annotate(like_count=Count("like"))
    talk = tal.order_by("-like_count")[0:6]
    context = { 
        "movie":movie,  
        "infos":infos, 
        "talk": talk,
        "infos":infos,
        "talk": talk,
                      
    }
    return render(request, "movie/index.html", context)


def movie_talk(request):
    info = Info.objects.all()
    inf = info.annotate(like_count=Count("like"))
    infos = inf.order_by('-like_count')[0:6]
    talks = Community.objects.all()
    tal = talks.annotate(like_count=Count("like"))
    talk = tal.order_by("-like_count")[0:6]
    movies = Text.objects.all()
    mov = movies.annotate(like_count=Count("like"))
    movie = mov.order_by("-like_count")[0:6]
    page = request.GET.get("page", "1")
    pag = movies.annotate(like_count=Count("like"))
    page_ = pag.order_by("-pk")  # 작성 순으로 바꿨습니다.
    paginator = Paginator(page_, 20)
    page_obj = paginator.get_page(page)
    context = {
        "pageboard": page_obj,
        "movie":movie,
    }
    return render(request, "movie/movie_talk.html", context)

@login_required
def mov_form(request):
    if request.method == "POST":
        com_form = forms.SpotForm(request.POST, request.FILES)
        if com_form.is_valid():
            com = com_form.save(commit=False)
            com.user = request.user
            com_form.save()
            return redirect("movie:movie_talk")
    else:
        com_form = forms.SpotForm()
    context = {
        "com_form":com_form,
    }
    return render(request, "movie/mov_form.html", context)

def mov_detail(request, pk):
    text = Text.objects.get(pk=pk)
    comment_form = CommentForm()
    comments = text.spotcomment_set.all()
    movies = Text.objects.all()
    movie = movies.order_by("-pk")
    context = {
        "movie":movie,
        "text" : text,
        "comment_form": comment_form,
        "comments": comments,
    }
    return render(request, "movie/mov_detail.html", context)

@login_required
def mov_update(request, pk):
    com = Text.objects.get(pk=pk)
    if request.method == "POST":
        com_form = SpotForm(request.POST, request.FILES, instance=com)
        if com_form.is_valid():
            com.save()
            return redirect("movie:mov_detail", pk)
    else:
        com_form = SpotForm(instance=com)
    context = {
        "com_form": com_form,
    }
    return render(request, "movie/mov_form.html", context)

@login_required
def mov_delete(request, pk):
    Text.objects.get(pk=pk).delete()
    return redirect("movie:movie_talk")


@login_required
def mov_comment(request, pk):
    text = Text.objects.get(pk=pk)
    comment_form = CommentForm(request.POST)
    if comment_form.is_valid():
        comment = comment_form.save(commit=False)
        comment.text = text
        comment.user = request.user
        comment.save()
    return redirect("movie:mov_detail", pk)


@login_required
def like(request, com_pk):

    com = get_object_or_404(models.Text, pk=com_pk)

    if request.user in com.like.all():
        com.like.remove(request.user)
    else:
        com.like.add(request.user)

    return redirect("movie:mov_detail", com_pk)


def com_delete(request, com_pk, comment_pk):
    Spotcomment.objects.get(pk=comment_pk).delete()
    return redirect("movie:mov_detail", com_pk)
    