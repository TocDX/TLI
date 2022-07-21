import sys
sys.stdin = open("1288_input.txt", "r")



T = int(input())
for test_case in range(1, T + 1):
    # input 가져오기 (첫 번째 값 -> 1)
    n = int(input())
    n1 = n
    a = set()
    # while 반복 => set 길이가 10이 될 때까지 
    while True:
        # for 반복을 하는 동안 숫자를 문자로
        for i in str(n):
        # a set에 계속 set 추가 
            a.add(n)
        if len(a) == 10:
            break    
        # print(n,a)
        n += n1
    print(f'#{test_case} {n}')
        
# n *cnt OK!