# 주어진 리스트 numbers에서 최댓값을 구하여 출력하시오.
# max() 함수 사용 금지

numbers = [0, 20, 100]
a = 0

# 1. 반복
for i in numbers:
    # 만약 i가 a보다 클 때 
    if a < i:
        # a는 i와 같아진다.
        a = i
print(a)