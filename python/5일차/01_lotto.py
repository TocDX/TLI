import random
# 1~45까지의 숫자
# 그 중에 6개

n = int(input())
for i in range(n):
    number = random.sample(range(1,46), 6)
    number.sort()
    print(number)