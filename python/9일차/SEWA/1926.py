import sys
sys.stdin = open("1926_input.txt", "r")


T = int(input())
for i in range(1, T+1): # 1 ~ 100
    # 1~100의 숫자를 문자열로 바꿔준다
    i = str(i)
    # 3,6,9 문자열이 나올때 박수로 변수 선언 369를 세줄 카운트 함수
    clap = i.count('3') + i.count('6') + i.count('9')
    # 만약 3 6 9가 0으로 나오지 않는다면
    # 숫자 출력
    if clap == 0:
        print(i, end=' ')
    else:
        # 그렇지 않다면-로 박수를 쳐라
        print("-" * clap, end=' ')