class Person:
    type = '사람'
    # 인스턴스 메서드
    # 인스턴스가 활용할 메서드
    def greeting(self):
        print('안녕하세요')
iu = Person()
iu.greeting()

print(Person.type)