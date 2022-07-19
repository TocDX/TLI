# 정수 number가 주어질 떄, 뒤집어서 출력하기

number = 123
count = 0
print(int(str(number)[::-1]))


while number:
    # 이전 결과에 10을 곱하고
    count *=10
    # 나머지를 더해주고
    count += number%10
    # number를 깎는다
    number //= 10
print(count)

    
