from django.urls import path
from . import views

app_name = "movie"

urlpatterns = [
    path("", views.index, name="index"),
    path('movie_talk/', views.movie_talk, name="movie_talk"),
    path('movie_talk/create', views.mov_form, name="mov_form"),
    path("movie_talk/<int:pk>", views.mov_detail, name="mov_detail"),
    path("movie_talk/<int:pk>/update", views.mov_update, name="mov_update"),
    path("movie_talk/<int:pk>/delete", views.mov_delete, name="mov_delete"),
    path("movie_talk/<int:pk>/comments/", views.mov_comment, name="mov_comment"),
    path("<int:com_pk>/like/", views.like, name="like"),
    path("movie_talk/<int:pk>/comments/<int:comment_pk>/",views.com_delete,name="com_delete"),
]
