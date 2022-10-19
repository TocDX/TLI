## 1

> python -m venv venv (가상환경 설치)

## 2

> source venv/Scripts/activate (가상환경 실행)

## 3

> pip django==3.2.12 (장고 설치)

## 4

> pip freeze > requirements.txt (설치 환경)

## 5

> pip install -r requirements.txt (쓰고 있던 설치들 가져오기)

## 6

> django-admin startproject pjt . (프로젝트 생성)

## 7

> python manage.py startapp article (앱 생성)

## 8

> path('article/', include('article.urls')), (url 추가)

## 9

image.png

> 세팅에 app 등록

image.png

> static 이미지 파일, user모델 세팅

image.png

> 공통적으로 쓰일 베이스파일 등록

## 10
