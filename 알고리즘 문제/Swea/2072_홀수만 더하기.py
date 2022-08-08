# 10개의 수를 입력 받아, 그 중에서 홀수만 더한 값을 출력하는 프로그램을 작성하라.

t = int(input())

for i in range(1,t+1):
    a = list(map(int,input().split()))
    cnt = 0
    for j in a:
        if j % 2 == 1:
            cnt += j
    print("#{} {}".format(i,cnt))