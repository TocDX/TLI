sum = 5

print(sum([1,2,3]))

# Traceback (most recent call last):
#   File "c:\Users\Wow\Desktop\새 폴더\python\3일차\05_LEGB.py", line 3, in <module>
#     print(sum([1,2,3]))
# TypeError: 'int' object is not callable

# sum이 지금은 5가 되어버림
# Built-in scope에 sum 함수가 있었음.
# Global scope에 sum이름의 변수를 만들었음
# 찾으니까 L -> E -> G -> B

def func1():
    def func2():
            return ''
    return '' 