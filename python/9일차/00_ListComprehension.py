# 1~3의 세제곱의 결과가 담긴 딕셔너리

cubic_dict = {}
for number in range(1, 4):
    cubic_dict[number] = number ** 3
print(cubic_dict)


# 리스트 컴프리핸션
even_list = [i**2 for i in range(10) if i % 2 == 0]
print(even_list)