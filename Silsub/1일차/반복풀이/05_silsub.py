# 주어진 숫자의 평균을 구하는 코드를 작성하시오.
# sum(), len()  함수 사용 금지

number = {3, 10 ,20}
cnt = 0
result = 0
for i in number:
    cnt += i
    result += 1
print(cnt/result)