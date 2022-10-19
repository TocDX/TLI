from django.urls import path
from . import views
app_name = 'movies'

urlpatterns = [
    path('', views.main, name='main'),
    path('create/', views.create, name='create'),
    path('index/', views.index, name='index'),
    path('<int:pk>/', views.detail, name='detail'),
    path('<int:pk>/update/', views.update, name='update'),
    path('<int:pk>/delete/', views.delete, name='delete'),
    path('<int:pk>/comments/', views.comment_create, name='comment_create'),
    path('<int:movie_pk>/comments/<int:comment_pk>/delete/', views.comment_delete, name='comment_delete'),

]
