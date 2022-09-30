from unicodedata import name
from django.urls import path
from . import views

app_name = 'review'

urlpatterns = [
    path('', views.index, name='index'),
    path('create/', views.create, name='create'),
    path('new/', views.new, name='new'),
    path('detail/<int:pk_>', views.detail, name='detail'),
    path('delete/<int:pk>', views.delete, name='delete'),
    path('edit/<int:pk>', views.edit, name='edit'),
    path('update/<int:pk>', views.update, name='update'),
]