# 함수 내부에서 값을 쓰고 싶으면 어떻게 해야 할까
# 정의할 때 이름을 지어놓고 호출할 때 값을 넘겨준다


class MyClass:
    
    # 메서드를 정의했습니다.

    def __init__(self):
        self.instance_variable = '인스턴스 변수'

    # 인스턴스 메서드
    def instance_method(self):
        return self, self.instance_variable
    # 클래스 메서드
    @classmethod
    def class_method(cls):
        return cls, cls.instance_method
    # 스태틱 메서드
    @staticmethod
    def static_method():
        return '스태틱'

c1 = MyClass()

print('인스턴스 변수 호출', c1.instance_variable)
print('인스턴스 메서드 호출', c1.instance_method())
print('클래스 메서드 호출', c1.class_method())
print('스태틱 메서드 호출 입니다', c1.static_method())

# 클래스 메서드는 클래스가 호출을 할건데 내부적으로 클래스 자체가 필요한 경우
# 스태틱 메서드는 내부적으로 클래스 인스턴스 모두 필요 없을때 사용하세요