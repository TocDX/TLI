# 클래스 정의
class Person:
    pass

# 인스턴스 생성
p1 = Person()
# 인스턴스 속성
p1.name = '홍길동'

print(p1.name)


# 객체에는 메소드 속성이 있고
# 메서드에는 클래스 메서드, 인스턴스 메서드
# 속성에는 클래스 변수, 인스턴스 변수가 있다.

a = [3,2,1]
a.append(4)
a.sort()
print(a)

a, b = input()
print( b)