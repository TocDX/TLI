from django.urls import path
from . import views

app_name = "accounts"

urlpatterns = [
    path("signup/", views.signup, name="signup"),
    path("login/", views.login, name="login"),
    path("logout/", views.logout, name="logout"),
    path("<nickname>", views.profile, name="profile"),
    path("update/", views.update, name="update"),
    path("<int:user_pk>/follow/", views.follow, name="follow"),
    path("<nickname>/review", views.usereview, name="usereview"),
]
