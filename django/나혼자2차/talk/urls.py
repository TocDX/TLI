from django.urls import path
from . import views

app_name = "talk"

urlpatterns = [
    path("", views.talk_index, name="talk_index"),
    path("talk_create/", views.talk_create, name="talk_create"),
    path("talk/<int:pk>", views.talk_detail, name="talk_detail"),
    path("talk/<int:pk>/delete", views.talk_delete, name="talk_delete"),
    path("talk/<int:pk>/update", views.talk_update, name="talk_update"),
    path("talk/<int:pk>/comments/", views.talk_comment, name="talk_comment"),
    path("<int:com_pk>/like/", views.like, name="like"),
]
