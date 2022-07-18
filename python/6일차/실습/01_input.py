# TypeError: unsupported operand type(s) for +: 'int' and 'str
# 실행하면 나오는 에러
# 정수와 문자열은 + 연산이 실행이 안된다.
# input()은 문자열로 받아들이기 때문에
# 정수형으로의 형변환이 필요하다
# numbers = input().split()
numbers = map(int, input().split())

print(sum(numbers))
# print(sum(numbers))