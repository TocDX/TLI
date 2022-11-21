from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.decorators import login_required
from info.models import Info
from . import forms
from . import models
from .forms import InfoForm, InfoCommentForm
# Create your views here.
def movie_info(request):
    movies = Info.objects.all()
    movie = movies.order_by('-pk')
    return render(request,'info/movie_info.html',{"movie":movie})

@login_required
def info_create(request):
    if request.method == "POST":
        com_form = forms.InfoForm(request.POST, request.FILES)
        if com_form.is_valid():
            com = com_form.save(commit=False)
            com.user = request.user
            com_form.save()
            return redirect("info:movie_info")
    else:
        com_form = forms.InfoForm()
    context = {
        "com_form":com_form,
    }
    return render(request, "info/info_create.html", context)


def info_detail(request, pk):
    info = Info.objects.get(pk=pk)
    comment_form = InfoCommentForm()
    comments = info.infocomment_set.all()
    context = {
        "info": info,
        "comment_form": comment_form,
        "comments": comments,
    }
    
    return render(request, "info/info_detail.html", context)

def info_delete(request, pk):
    Info.objects.get(pk=pk).delete()
    return redirect("info:movie_info")

@login_required
def info_update(request, pk):
    info = Info.objects.get(pk=pk)
    if request.method == "POST":
       com_form = InfoForm(request.POST, request.FILES, instance=info)
       if com_form.is_valid():
          info.save()
          return redirect("info:info_detail",pk)
    else:
        com_form = InfoForm(instance=info)
    context = {
        "com_form": com_form,
    }
    return render(request, "info/info_create.html", context)

@login_required
def like(request, com_pk):

    com = get_object_or_404(models.Info, pk=com_pk)

    if request.user in com.like.all():
        com.like.remove(request.user)
    else:
        com.like.add(request.user)

    return redirect("info:info_detail", com_pk)

@login_required
def info_comment(request, pk):
    info = Info.objects.get(pk=pk)
    comment_form = InfoCommentForm(request.POST)
    if comment_form.is_valid():
        comment = comment_form.save(commit=False)
        comment.text = info
        comment.user = request.user
        comment.save()
    return redirect("info:info_detail", pk)