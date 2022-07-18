# 정수형으로 형변환을 하는 int,input이 들어 있어
# 문자열을 입력하면 에러가 나 출력이 안되었다
# int가 아닌 str로 바꾸면 출력이 가능해진다
words = list(map(str, input().split()))
print(words)