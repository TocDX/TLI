
from math import remainder

# def sum_digit(n):

#         return sum([int(i) for i in str(n)])
# print("{}".format(sum_digit(123)))

# 1
number = 123
result = 0
# # number가 0일 때 멈춤
# # => int는 0일 때 false
while number:
# #     # 몫은 다음  number
# #     # 나머지는 더해나가면 된다
#      result += number%10
#      number //= 10

        # 2 
        # divmod(x, y)는 x를 y로 나누고,
        # 결과를 tuple로 반환
        # (몫, 나머지)
        number, remainder = divmod(number, 10)
        result += remainder
print(result)