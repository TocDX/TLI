# 1부터 n까지의 곱을 구하여 출력하는 코드를 
# 1) while 문 2) for 문으로 각각 작성하시오.

# n = 5라고 예시를 줬으니 n=5
n = 5
# 곱하기 위한 카운트 0이 아닌 이유는 1씩 증가해서 곱해야하기 때문에
cnt = 1
# n의 변수를 받을 변수선언
num = 0

# range n 즉 range에 12345를 변수 선언
for num in range(n):
    # num을 5가 될때까지 1씩증가
    num += 1
    # 1씩 증가하면서 cnt와 num이 같아지면서 곱하게 된다
    # ex)(1,1),(1,2),(2,3),(6,4)
    cnt *= num
print(cnt)