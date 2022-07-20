import sys
sys.stdin = open("2050_input.txt", "r")

t = input()
# t안에 i가 있다면
for i in t:
    # b는 유니코드65번 A를 소환
    b = ord(i)-64
    print(b, end=' ')

 