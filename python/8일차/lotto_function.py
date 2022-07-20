import random


# n을 넣으면
# 그 횟수만큼

def lotto(n):
    result = []
    for i in range(n):
        numbers = range(1, 45)
        pick = random.sample(numbers,6)
        result.sort()
        result.append(pick)
        return result

print(lotto(3))