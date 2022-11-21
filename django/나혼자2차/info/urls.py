from django.urls import path
from . import views
app_name = "info"

urlpatterns = [
     path('movie_info/', views.movie_info, name="movie_info"),
     path('info_create/', views.info_create, name="info_create"),
     path("movie_info/<int:pk>", views.info_detail, name="info_detail"),
     path("movie_info/<int:pk>/delete", views.info_delete, name="info_delete"),
     path("<int:com_pk>/like/", views.like, name="like"),
     path("movie_info/<int:pk>/update", views.info_update, name="info_update"),
     path("movie_info/<int:pk>/comments/", views.info_comment, name="info_comment"),
]