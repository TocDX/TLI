


# 슬라이싱
e = [4, 5, 6]
f = e[::]
f[0] = 'hi'

#깊은 복사

a = [[1, 2], 2, 3]
b = list(a)
b[0][0] = 'hi'

print(a)
print(b)

import copy
a = [[1, 2], 2, 3]
b = copy.deepcopy(a)
b[0][0] = 'hi'

print(a)
print(b)