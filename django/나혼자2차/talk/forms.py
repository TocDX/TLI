from django import forms
from .models import Community, Comcomment
from django_summernote.widgets import SummernoteWidget

class CommunityForm(forms.ModelForm):
    class Meta:
        model = Community
        fields = [
            "category",
            "title",
            "content",
           
        ]
        labels = {
            "category": "카테고리",
            "title": "제목",
            "content": "내용",
            
        }

        widgets = {
            'content': SummernoteWidget(),
        }

class ComcommentForm(forms.ModelForm):
    content = forms.CharField(
        label="",
        widget=forms.TextInput(
            attrs={
                "placeholder": "댓글을 남겨보세요 💬",
            }
        ),
    )

    class Meta:
        model = Comcomment
        fields = [
            "content",
        ]