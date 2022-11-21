from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    PermissionsMixin,
    BaseUserManager,
)

from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill

# Create your models here.


class UserManager(BaseUserManager):

    use_in_migrations = True

    def create_user(self, email, nickname, name, profile_image, password):

        if not email:
            raise ValueError("이메일을 입력해주세요")
        if not password:
            raise ValueError("비밀번호를 입력해주세요")
        user = self.model(
            email=self.normalize_email(email),
            nickname=nickname,
            name=name,
            profile_image=profile_image,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, nickname, name, password):

        user = self.create_user(
            email=self.normalize_email(email),
            nickname=nickname,
            name=name,
            password=password,
        )
        user.is_admin = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class User(AbstractBaseUser, PermissionsMixin):
    objects = UserManager()
    email = models.EmailField(
        max_length=255,
        unique=True,
    )
    nickname = models.CharField(max_length=30, unique=True)
    name = models.CharField(
        max_length=10,
    )
    profile_image = ProcessedImageField(
        upload_to="profile",
        null=True,
        processors=[ResizeToFill(300, 480)],
        format="JPEG",
        options={"quality": 100},
    )
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    followings = models.ManyToManyField(
        "self", symmetrical=False, related_name="followers"
    )
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "nickname",
        "name",
    ]

    def __str__(self):
        return self.email

    def __str__(self):
        return self.nickname

    def __str__(self):
        return self.name

    @property
    def is_staff(self):
        return self.is_admin
