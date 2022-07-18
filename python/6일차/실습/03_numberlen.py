
# 이대로 실행을 하면
# TypeError: object of type 'int' has no len()
# 라는 에러가 뜨는데 이는 인트는 길이를 가지고 있지 않다
# 라고 볼 수 있다 따라서 프린트문에서 문자열로 바꿔주면
# 해결이 가능하다
number = 22020718
print(len(str(number)))