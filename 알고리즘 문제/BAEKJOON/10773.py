# inputs = [3, 0, 4, 0]
# inutts2 = [1, 3, 5, 4, 0, 0, 7, 0, 0, 6]

K = int(input())
input_list = []

for _ in range(K):
    input_list.append(int(input()))
    stack = []

    for i in input_list:
        if i != 0:
            stack.append(i)
        else:
            stack.pop()
print(sum(stack))