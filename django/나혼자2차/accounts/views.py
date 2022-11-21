from django.shortcuts import render, redirect
from movie.models import Text
from .forms import UserCreationForm, UserChangeForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import (
    login as auth_login,
    logout as auth_logout,
    get_user_model,
)
from django.contrib.auth.decorators import login_required
from .models import User
from django.contrib import messages
from django.views.decorators.http import require_http_methods, require_POST
from django.core.paginator import Paginator
from django.db.models import Count

# Create your views here.


def signup(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            auth_login(request, user)
            return redirect("movie:index")
    else:
        form = UserCreationForm()
    context = {
        "form": form,
    }
    return render(request, "accounts/signup.html", context)


def login(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            auth_login(request, form.get_user())
            messages.success(request, "로그인 되었습니다.")
            return redirect("movie:index")
    else:
        form = AuthenticationForm()
    context = {
        "form": form,
    }
    return render(request, "accounts/login.html", context)


@login_required
def logout(request):
    auth_logout(request)
    messages.success(request, "로그아웃 되었습니다.")
    return redirect("movie:index")


@login_required
def profile(request, nickname):
    User = get_user_model()
    person = User.objects.get(nickname=nickname)
    context = {
        "person": person,
    }
    return render(request, "accounts/profile.html", context)


@login_required
def update(request):
    if request.method == "POST":
        form = UserChangeForm(request.POST, request.FILES, instance=request.user)
        if form.is_valid():
            form.save()
            messages.success(request, "회원정보 수정이 완료되었습니다.")
            return redirect("movie:index")
    else:
        form = UserChangeForm(instance=request.user)
    context = {
        "form": form,
    }
    return render(request, "accounts/update.html", context)


@require_POST
def follow(request, user_pk):
    if request.user.is_authenticated:
        User = get_user_model()
        person = User.objects.get(pk=user_pk)
        if person != request.user:
            if person.followers.filter(pk=request.user.pk).exists():
                person.followers.remove(request.user)
            else:
                person.followers.add(request.user)
        return redirect("accounts:profile", person.nickname)
    return redirect("accounts:login")



def usereview(request, nickname):

    page = request.GET.get("page", "1")
    page_li = Text.objects.filter(user__nickname=nickname)
    pag = page_li.annotate(like_count=Count("like"))
    page_ = pag.order_by("-like_count")
    paginator = Paginator(page_, 6)
    page_obj = paginator.get_page(page)

    context = {
        "pageboard": page_obj,
        "nickname": nickname,
    }
    return render(request, "accounts/usereview.html", context)