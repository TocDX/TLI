from django.urls import path
from . import views


app_name = 'article'

urlpatterns = [
    path('', views.main, name='manin'),
    path('index/', views.index, name='index'),
    path('create', views.create, name='create'),
    path('<int:pk>/', views.detail, name='detail'),
    path('<int:pk>/update/', views.update, name='update'),
] 
