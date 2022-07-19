class person:
    # 생성자 인스턴스가 생성될때 어떠한 직업
    def __init__(self, name, age):
        # 그 인스턴의 이름을 name으로 해주세요.
        self.name = name
        self.age = age


# Person 클래스의 인스턴스인 iu를 생성

iu = person('아이유', 30)
print(iu.name)
print(iu.age)
jimin = person('지민', 40)
print(jimin.name)
print(jimin.age)