class person:
    
    def __init__(self, name, age, gender):
        self.name = name
        self.age = age
        self.gender = gender

    def info(self):
        return(self.name, self.age, self.gender)

hong = person('홍길동', 100, 'm')

print(hong.info())