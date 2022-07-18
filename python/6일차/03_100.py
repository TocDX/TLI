# 100을 사용자가 이렵한 숫자로 나눠서 결과를 출력

num = input()



try:
    print(100/int(num))

except ZeroDivisionError as err:
    print(err)
    print('0으로 나눌 수는 없습니다')
# except ValueError:
#     print('숫자 형식을 입력해주세요')
# except Exception:
#     print('오류')