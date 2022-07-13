# 주어진 리스트 numbers에서 두번째로 큰 수를 구하여 출력하시오.
# max() 함수 사용 금지


numbers = [0, 20, 100, 50, -60, 50, 100] # 50

a = numbers[0] 

b = numbers[0]
# 전체 숫자를 반복
for i in numbers:
    # 만약에, n이 최대보다 크다면
    if a < i:
        # 최대값이었던 것이 두번째로 큰 수
        b = a
        a = i
    elif b < i and i < a:
        b = i
print(b)