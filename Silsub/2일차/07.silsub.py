# 주어진 리스트 numbers에서 최솟값을 구하여 출력하시오.
# min() 함수 사용 금지

numbers = [110, 20, 100, 30, 40]
# 이 리스트에 첫번째부터 시작하겠다
a = numbers[0]
#1. 반복시작
for i in numbers:
    # i가 a보다 작다면
    if a > i:
        #a와 i는 같다
        a = i
print(a)