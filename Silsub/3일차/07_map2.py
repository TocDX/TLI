# 직사각형의 넓이를 구하시오.
# 직사각형의 세로는 n 가로는 m
# input 예시
# 10, 20



# n , m = map(int, input().split()) 
# input() 타입 : 항상 String(문자열), 문자열.split() 타입 : 내가 구분값을 기준으로 쪼개겠다 결과값은 항상 lIST
# 문자열로 받은것을 각각의 공백을 기준으로 List로 쪼갰다 = ['10', '20']
# map : 어떤 함수를 반복가능한 것들의 요소에 모두 적용시킨 결과
# int 함수를 input().split()리스트의 모든 요소에 적용한 결과
# => map object(맵 어떤 것)
# [10, 20]
#print(n*m)


# 내장함수를 10을 다 더해주는 함수가 있다
def plus10(n):
    return n + 10

numbers = [10, 20, 30]
new = list(map(plus10, numbers))
print(new)