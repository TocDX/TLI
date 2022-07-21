import sys
sys.stdin = open("1989_input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
for test_case in range(1, T + 1):
    # 문자열을 받아줄 input 함수 
    n = input()    
    # 만약 n의 단어가 뒤집은 n의 단어와 같지 않다면
    if n != n[::-1]:
        # 0으로 거짓
        result = 0 
    else:
        # 맞다면 1로 참
        result = 1

    print("#{} {}".format(test_case,result))
