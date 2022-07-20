import sys
sys.stdin = open("2019_input.txt", "r")

# 1부터 주어진 횟수까지 2를 곱한 값(들)을 출력하시오.

# 주어질 숫자는 30을 넘지 않는다.

t = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.

for i in range(0, t+1):
    # i의 제곱근
    i = 2**i
    print(i)

