# 리스트는 mutable

a = [1, 2, 3]
a[0] = 100
print(a)

# 문자열은 immutable
# 문자열의 첫번째 인덱스에 해당하는 값은 바꿀 수 없다
a = 'hi'
a[0] = 'c'
print(a)

# Traceback (most recent call last):
#   File "c:\Users\Wow\Desktop\새 폴더\TIL\수업 정리\python\4일차\04_mutable.py", line 9, in <module>
#     a[0] = 'c'
# TypeError: 'str' object does not support item assignment