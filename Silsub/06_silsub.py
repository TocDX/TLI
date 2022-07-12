
# 최댓값 구하기
numbers = [-10, -100, -30]
result = numbers[0]

# 1. 반복
for num in numbers:
    # 2. 만약, result값이 num보다 작으면 바꾼다
    if result <= num:
        result = num
print(result)

