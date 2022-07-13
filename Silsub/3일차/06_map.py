import numbers

numbers = ['1', '2', '3']

# 숫자로 바꿔서 쓰고 싶다
# 리스트를 숫자로 형 변환은 불가능하다
# 다만, 숫자 형태의 문자를 변환할 수 는 있다
# n = int(numbers)

a = int(numbers[0])
b = int(numbers[1])
c = int(numbers[2])

new_numbers = [a, b, c]

# 반복문 
new_numbers = []
for number in numbers:
    new_numbers.append(int(number))
print(new_numbers)

# map!
numbers = ['1', '2', '3']
new_numbers2 = map(int,numbers)
print(new_numbers2) # <map object at 0x0000021BDED54FA0> : 이미 함수가 모두 적용됨
print(list(new_numbers2)) # 리스트로 형변환하면 바뀌어있다
# 보기 위해서 바꾼 것일뿐 반드시 list로 바꾸어야 하는것은 아니다

