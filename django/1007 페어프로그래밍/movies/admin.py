from django.contrib import admin
from .models import Movie,Comment
# Register your models here.

class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_at', 'updated_at')

class CommentAdmin(admin.ModelAdmin):
    list_display = ('content', 'created_at', 'movie')


admin.site.register(Movie)
admin.site.register(Comment)