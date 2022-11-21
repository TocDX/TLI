from django import forms
from .models import Text, Spotcomment
from .widgets import starWidget
from django_summernote.widgets import SummernoteWidget


class SpotForm(forms.ModelForm):
    class Meta:
        model = Text
        fields = [
            "title",
            "content",
            "themes",
            
            
        ]
        labels = {
            "title": "글 제목",
            "content": "내용",
            "themes": "분류",
            
            
        }
        widgets = {
            'content': SummernoteWidget(),
        }

class CommentForm(forms.ModelForm):
    content = forms.CharField(
        label="",
           widget=forms.TextInput(
            attrs={
                "placeholder": "댓글을 남겨보세요 💬",
            }
        ),
    )

    class Meta:
        model = Spotcomment
        fields = [
            "content",
 
        ]
