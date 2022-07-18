# AttributeError: 'tuple' object has no attribute 'append'
# 튜플은 append를 사용하지 못한다라고 한다
# 그렇다면 튜플이 아닌 리스트를 사용하면 
# 사용할 수 있다
N = 10
answer = []
for number in range(N + 1):
    answer.append(number * 2)

print(answer)