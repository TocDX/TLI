


a = int(input())
b = int(input())
c = int(input())

N = a*b*c

array = list(str(N))

print(array)
for i in range(10):
    print(array.count(str(i)))