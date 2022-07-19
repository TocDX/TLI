class person:
    pass


# Person 클래스의 인스턴스 iu
iu = person()

# iu의 인스턴스 변수
iu.name = '아이유'
iu.age = 28
iu.gender = 'f'
#인스턴스 변수 접근
print(iu.age)
print(iu)

class person:
    # 생성자 인스턴스가 생성될때 어떠한 직업
    def __str__(self):
        # 그 인스턴의 이름을 name으로 해주세요.
        return f'<{self.name}>'


# Person 클래스의 인스턴스인 iu를 생성

iu = person()
print(iu.name)
print(iu.age)
print(iu)
jimin = person('지민', 40)
print(jimin.name)
print(jimin.age)