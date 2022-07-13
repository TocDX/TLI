# 숫자 n을 받아 세제곱 결과를 반환하는 함수 cube를 정의하시오. 
# cube 함수를 호출하여 12의 세제곱 결과를 출력하시오



# 세제곱 결과를 얻기 위해 함수 값 입력
def cube(n):
    # a에 n ** 3 세제곱 입력
    a = n ** 3
    # a의 입력값을 리턴받는다
    return a
# result 값으로 12를 입력
result = cube(12)
print(result)