from django.shortcuts import render, redirect,get_object_or_404
from .models import Community
from django.db.models import Count
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required
from .forms import CommunityForm, ComcommentForm
from . import forms
from . import models
# Create your views here.


def talk_index(request):
    movies = Community.objects.all()
    page = request.GET.get("page", "1")
    pag = movies.annotate(like_count=Count("like"))
    page_ = pag.order_by("-pk")  # 작성 순으로 바꿨습니다.
    paginator = Paginator(page_, 20)
    page_obj = paginator.get_page(page)
    context = {
        "pageboard": page_obj,
    }
    return render(request, "talk/talk_index.html", context)

@login_required
def talk_create(request):
    if request.method == "POST":
        com_form = forms.CommunityForm(request.POST, request.FILES)
        if com_form.is_valid():
            com = com_form.save(commit=False)
            com.user = request.user
            com_form.save()
            return redirect("talk:talk_index")
    else:
        com_form = forms.CommunityForm()
    context = {
        "com_form":com_form,
    }
    return render(request, "talk/talk_create.html", context)

def talk_detail(request, pk):
    text = Community.objects.get(pk=pk)
    comment_form = ComcommentForm()
    comments = text.comcomment_set.all()
    movies = Community.objects.all()
    movie = movies.order_by("-pk")
    context = {
        "movie":movie,
        "text" : text,
        "comment_form":comment_form,
        "comments":comments,
        
        
    }
    return render(request, "talk/talk_detail.html", context)



@login_required
def talk_update(request, pk):
    com = Community.objects.get(pk=pk)
    if request.method == "POST":
        com_form = CommunityForm(request.POST, request.FILES, instance=com)
        if com_form.is_valid():
            com.save()
            return redirect("talk:talk_detail", pk)
    else:
        com_form = CommunityForm(instance=com)
    context = {
        "com_form": com_form,
    }
    return render(request, "talk/talk_create.html", context)

@login_required
def talk_delete(request, pk):
    Community.objects.get(pk=pk).delete()
    return redirect("talk:talk_index")



@login_required
def talk_comment(request, pk):
    text = Community.objects.get(pk=pk)
    comment_form = ComcommentForm(request.POST)
    if comment_form.is_valid():
        comment = comment_form.save(commit=False)
        comment.community = text
        comment.user = request.user
        comment.save()
    return redirect("talk:talk_detail", pk)


@login_required
def like(request, com_pk):

    com = get_object_or_404(models.Community, pk=com_pk)

    if request.user in com.like.all():
        com.like.remove(request.user)
    else:
        com.like.add(request.user)

    return redirect("talk:talk_detail", com_pk)