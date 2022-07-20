# 주어진 수 n이 3의 배수이면서 짝수인 경우 
# ‘참’을 거짓인 경우 ‘거짓'을 출력하시오.

# n이 200 이라고 변수 선언을 하였을 때
n = 200

# 3의 배수이면서 짝수인 경우는 6이 나온다
# 따라서 n나누기 6의 나머지가 0이 되었을 때가 된다
# 나머지가 0일 경우 참 0이 아닐 경우 불이 된다
if n % 6 == 0:
    print("참")
else:
    print("불")


