# 2번째로 큰 수 구하기
numbers = [-34, -20, -100, -40]

result = numbers[0]
result1 = numbers[0]
# 1. 전체 숫자를 반복
for num in numbers:
    # 만약에, n이 최대보다 크다면
    if result < num:
        # 최대값이었던 것이 두번째로 큰수
        result1 = result
        result = num  
    elif result1 < num < result:
        result1 = num

print(result1)