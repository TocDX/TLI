from multiprocessing import context
from django.shortcuts import render,redirect
from .models import Movie
from .forms import MovieForm
# Create your views here.

def index(request):
    movies = Movie.objects.order_by('-pk')
    context = {
        'movies':movies
    }
    return render(request, 'movies/index.html', context)

def create(request):
    if request.method == 'POST':
        movie_form = MovieForm(request.POST)
        if movie_form.is_valid():
            movie_form.save()
            return redirect('movies:index')
    else:
        movie_form = MovieForm()
    context = {
        'movie_form': movie_form
    }
    return render(request, 'movies/new.html', context=context)

def detail(request,pk):
    movies = Movie.objects.get(pk=pk)
    context = {
        'movies':movies
    }
    return render(request, 'movies/detail.html', context)

def update(request,pk):
    movies = Movie.objects.get(pk=pk)
    if request.method == 'POST':
        movie_form = MovieForm(request.POST, instance=movies)
        if movie_form.is_valid():
            movie_form.save()
            return redirect('movies:detail', movies.pk)
    else:
        movie_form = MovieForm(instance=movies)
    context = {
        'movie_form': movie_form
    }
    return render(request, 'movies/update.html', context)

def delete(request,pk):
    Movie.objects.get(pk=pk).delete()

    return redirect("movies:index")
