# 주어진 리스트 numbers에서 최댓값을 구하여 출력하시오.
# max() 함수 사용 금지

numbers = [0, 20, 100]
result = numbers[0]


for number in numbers:
    if result <= number:
        result = number
print(result)