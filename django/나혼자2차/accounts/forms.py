from django import forms
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from django.utils.translation import ugettext_lazy as _
import imagekit
from .models import User, UserManager
import string
from django.forms import ValidationError


def contains_special_charater(value):
    for char in value:
        if char in string.punctuation:
            return True
    return False


def contains_alnum(value):
    for char in value:
        if char.isalnum():
            return True
    return False


class UserCreationForm(forms.ModelForm):
    # 사용자 생성 폼
    email = forms.EmailField(
        label=_("Email"),
        required=True,
        widget=forms.EmailInput(
            attrs={
                "class": "form-control",
                "placeholder": _("Email address"),
                "required": "True",
            }
        ),
    )
    nickname = forms.CharField(
        label=_("닉네임"),
        required=True,
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": _("닉네임"),
                "required": "True",
            }
        ),
    )
    name = forms.CharField(
        label=_("이름"),
        required=True,
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": _("이름"),
                "required": "True",
            }
        ),
    )

    password1 = forms.CharField(
        label=_("Password"),
        widget=forms.PasswordInput(
            attrs={
                "class": "form-control",
                "placeholder": _("비밀번호는 특수문자, 알파벳, 숫자를 포함해 8글자 이상으로 설정해주세요"),
                "required": "True",
            }
        ),
    )
    password2 = forms.CharField(
        label=_("비밀번호 확인"),
        widget=forms.PasswordInput(
            attrs={
                "class": "form-control",
                "placeholder": _("비밀번호 확인"),
                "required": "True",
            }
        ),
    )

    class Meta:
        model = User
        fields = (
            "email",
            "nickname",
            "name",
            "profile_image",
        )

    def clean_password2(self):
        # 두 비밀번호 입력 일치 확인
        # 비밀번호 특수문자 포함 확인
        password1 = self.cleaned_data.get("password1")
        password2 = self.cleaned_data.get("password2")
        if (
            len(password1) < 8
            or not contains_special_charater(password1)
            or not contains_alnum(password1)
        ):
            raise ValidationError("비밀번호는 8자이상, 특수문자와 알파벳 또는 숫자를 포함해야 합니다")
        if password1 and password2 and password1 != password2:
            raise ValidationError("패스워드가 일치하지 않습니다")
        return password2

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super(UserCreationForm, self).save(commit=False)
        user.email = UserManager.normalize_email(self.cleaned_data["email"])
        user.set_password(self.cleaned_data["password1"])
        if commit:
            user.save()
        return user


class UserChangeForm(forms.ModelForm):
    # 비밀번호 변경 폼
    password = ReadOnlyPasswordHashField(label=_("Password"))

    class Meta:
        model = User
        fields = (
            "nickname",
            "name",
            "password",
            "profile_image",
        )

    nickname = forms.CharField(
        label=_("닉네임"),
        required=True,
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": _("닉네임"),
                "required": "True",
            }
        ),
    )
    name = forms.CharField(
        label=_("이름"),
        required=True,
        widget=forms.TextInput(
            attrs={
                "class": "form-control",
                "placeholder": _("이름"),
                "required": "True",
            }
        ),
    )

    def clean_password(self):
        # Regardless of what the user provides, return the initial value.
        # This is done here, rather than on the field, because the
        # field does not have access to the initial value
        return self.initial["password"]
