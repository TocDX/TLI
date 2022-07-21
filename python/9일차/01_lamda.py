# map(함수, 반복가능한 것)
# 반복 가능한 것들의 모든 요소에 함수를 적용시킨 결과물
# map object로 반환한다


# map(__, _____) 
# int 형 변환함수를
# input으로 받은 것을 쪼갠 결과인 리스트에 각각 적용한다

# 기본 반복/조건 코드
from audioop import mul


numbers = [1, 2, 5, 10, 9, 12]
result = []
for number in numbers:
    if number % 3 == 0:
        result.append(number)
print(result)

# 만약에 map으로 쓰고 싶다면?
# 함수를 정의해야 한다

def multiple_3(number):
    return number * 3 
print(list(map(multiple_3, numbers)))

# 이 함수는 계속 사용되지 않고, map에서만 사용된다
# 임시적힌 함수를 만들고 싶다.

print(list(map(lambda n: n*3, numbers)))