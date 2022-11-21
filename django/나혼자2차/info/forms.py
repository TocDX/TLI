from django import forms
from .models import Info,Infocomment
from django_summernote.widgets import SummernoteWidget


class InfoForm(forms.ModelForm):
    class Meta:
        model = Info
        fields = [
            "title",
            "content",
            
            
            
        ]
        labels = {
            "title": "글 제목",
            "content": "내용",
            
            
        }
        widgets = {
            'content': SummernoteWidget(),
        }

class InfoCommentForm(forms.ModelForm):
    content = forms.CharField(
        label="",
        widget=forms.TextInput(
            attrs={
                "placeholder": "댓글을 남겨보세요 💬",
            }
        ),
    )

    class Meta:
        model = Infocomment
        fields = [
            "content",
        ]

