# 1부터 n까지의 곱을 구하여 출력하는 코드를 
# 1) while 문 2) for 문으로 각각 작성하시오.



# n = 5라고 예시를 줬으니 n=5
n = 5
# 곱하기 위한 카운트 0이 아닌 이유는 1씩 증가해서 곱해야하기 때문에
cnt = 1
# n의 변수를 받을 변수선언
num = 0

# num값이 n값 보다 작을때
while num < n:
    #num을 1씩 증가시킨다
    num += 1
    # num과 cnt는 곱하면서 같으니 num 1일때 1 x 1 
    # num이 2일때 2 x 1 = 2
    # num이 3일때 2 x 3 = 6.....
    cnt *= num
print(cnt)