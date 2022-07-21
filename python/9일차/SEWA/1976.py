import sys
sys.stdin = open("1976_input.txt", "r")

T = int(input())
for test_case in range(1, T + 1):
    # 시와 분을 받을 함수
    hour1, min1, hour2, min2 = map(int,input().split())
    # 시간 + 시간
    hour = hour1 + hour2
    # 분 + 분
    min = min1 + min2
    # 만약 분이 60보다 작거나 같으면
    if min > 60:
        # 59보다 클 경우 시간을 증가시켜주고
        # 60을 감소시켜라
        min -= 60
        hour += 1        
    # 만약 시간이 13보다 크거나 같으면
    if hour > 12:
        # 더해진 시간에서 12를빼라 (12로 맞추기 위해)
        hour  -= 12
    print(f'#{test_case} {hour} {min}')