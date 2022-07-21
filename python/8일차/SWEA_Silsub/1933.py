import sys
sys.stdin = open("1933_input.txt", "r")
t = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
cnt = 0
for i in range(1, t + 1):
    
    if i % t == 0:
        print(i, end=' ')


