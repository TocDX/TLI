import sys
sys.stdin = open("1986_input.txt", "r")

T = int(input())
for test_case in range(1, T + 1):
    N = int(input())
    rst = 0
    for n in range(1, N + 1):
        # 홀수인 경우 더함
        if n % 2 == 1:
            rst += n
        # 짝수인 경우 뺌
        else:
            rst -= n
    print(f'#{test_case} {rst}')
