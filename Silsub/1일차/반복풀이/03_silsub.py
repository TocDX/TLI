# 1부터 n까지의 합을 구하여 출력하는 코드를 
# 1) while 문 2) for 문으로 각각 작성하시오.
# sum() 함수 사용 금지


# 1부터 10까지의 숫자들을 합쳐야 한다 
# 다만 sum 함수 사용을 금지다

# 변수 n을 담을 변수
m = 0
# 10을 담을 변수
n = 10
# 숫자의 합을 카운트 할 변수
cnt = 0

# m이 n보다 작거나 같을떄까지 반복한다
while m <= n:
    # 카운터가 될 때 m에 들어있는 1부터 10까지를 더해준다
    cnt += m
    # 1부터 10까지 세줄 카운트
    m += 1
print(cnt)

# 반복문 시작 1,10까지의 범위 설정
for m in range(1,11):
    # 1,11까지의 숫자를 더해준다
    cnt += m
    print(cnt)