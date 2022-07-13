dust = int(input())
# dust가 150보다 크면, 매우 나쁨
# 80 보다 크면, 나쁨
# 30 보다 크면, 보통
# 좋은

# 중첩 조건문 사용

# dust가 150보다 크면, 매우 나쁨
if dust > 150 :
    if dust > 300:
        print("실외활동을 자제해주세요")
    else :
        print("매우 나쁨")
# 80 보다 크면, 나쁨    
elif dust > 80:
    print("나쁨")
# 30 보다 크면, 보통    
elif dust > 30:
    print("보통")
# 좋은    
# else는 위의 모든 조건에 해당하지 않는 나머지의 경우이기에 별도의 조건을 불가능
# 조건문에서 else는 생략이 가능하다
else :
    if dust < 0 :
        print("음수 값입니다")
    else :
        print("좋음")
