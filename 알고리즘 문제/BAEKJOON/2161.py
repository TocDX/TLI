# from collections import deque

# numbers = [1, 2, 3, 4, 5]
# # 덱으로 변환
# queue = deque(numbers)

# # 6추가
# queue.append(6)

# # 가장 첫번째 인자값을 빼줘라
# queue.popleft()

# print(queue)

queue = list(range(1,7+1))

while len(queue) > 1:

    print(queue.pop(0), end =" ")

queue.append(2)

print(queue)