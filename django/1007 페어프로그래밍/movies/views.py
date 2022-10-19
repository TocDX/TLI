from django.shortcuts import render,redirect
from .models import Movie,Comment
from .forms import MovieForm, CommentForm
from django.contrib.auth.decorators import login_required
# Create your views here.
def main(request):
    return render(request, 'movies/main.html')

@login_required
def create(request):
    if request.method == 'POST':
        movie_form = MovieForm(request.POST, request.FILES)
        if movie_form.is_valid():
            movie_form.save() 
            return redirect('movies:index')
    else:
        movie_form = MovieForm()
    context = {
            'movie_form': movie_form
        }
    return render(request, 'movies/new.html', context = context)

def index(request):
    movies = Movie.objects.order_by('-pk')
    context = {
        'movies':movies
    }
    return render(request, 'movies/index.html', context)

def detail(request,pk):
    movies = Movie.objects.get(pk=pk)
    comment_form = CommentForm()
    context = {
        'movies':movies,
        'comments': movies.comment_set.all(),
        'comment_form': comment_form

    }
    return render(request, 'movies/detail.html', context)


@login_required
def update(request,pk):
    movies = Movie.objects.get(pk=pk)
    if request.method == 'POST':
        movie_form = MovieForm(request.POST, request.FILES, instance=movies)
        if movie_form.is_valid():
            movie_form.save()
            return redirect('movies:detail', movies.pk)
    else:
        movie_form = MovieForm(instance=movies)
    context = {
        'movie_form':movie_form
    }
    return render(request, 'movies/update.html', context)

def delete(request, pk):
  # pk에 해당하는 글 삭제
  Movie.objects.get(id=pk).delete()

  return redirect('movies:index')

def comment_create(request,pk):
    movies = Movie.objects.get(pk=pk)
    comment_form = CommentForm(request.POST)
    if comment_form.is_valid():
       comment =  comment_form.save(commit=False)
       comment.movies = movies
       comment.save()
    return redirect('movies:detail', movies.pk )

def comment_delete(request, movie_pk, comment_pk):
    comment = Comment.objects.get(pk=comment_pk)
    comment.delete()
    return redirect('movies:detail', movie_pk)