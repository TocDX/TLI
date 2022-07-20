class Person:

    # 사람이라면 이름을 가지고 있다.
    # 인스턴스를 만들 떄는 이름 정보를 받아서 하고 싶다.
    # 생성자 메서드
    def __init__(self, name):
        # 개별 인스턴스에 각각 name 속성을 지정
        self.name = name
    
    def greeting(self):
        print('안녕하세요, 지민입니다')
        print(f'{self.name}입니다')
# 인스턴스 만들 때
jimin = Person('지민')
jimin.greeting()

iu = Person('지은')
iu.greeting()
