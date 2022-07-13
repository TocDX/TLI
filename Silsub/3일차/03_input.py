# 기본값이 sep는 ' '으로 정의가 되어 있음

print('hi', 'hello')
# 키워드로 sep를 넘겨줄 수 있음
print('hi', 'hello', sep='-')

print(1, 2, 3, 4, 5, 6, 7)

# 정해지지 않은 갯수의 인자
def my_add(*numbers):
    # 내부적으로 numbers가 tuple
    return numbers

result = my_add(1, 2, 3) # (1, 2, 3) <class 'tuple'>

print(result, type(result))

def my_func(**kwargs):  
    return kwargs

result = my_func(name='ggg', age= 22, gender='m') # {'name': 'ggg', 'age': 22, 'gender': 'm'} <class 'dict'>
print(result, type(result))