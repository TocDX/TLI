
# 이 코드를 실행 했을 때 만나게 되는
# 에러는 'int' object is not callable 이다.
# 이는 예약어를 변수명으로 썼기에 나타났던 오류이다

# 때문에 max였던 변수명을 max1로 바꿔주어
# 오류가 나지 않게 만들면 된다
number_list = [1, 23, 9, 6, 91, 59, 29]
max1 = max(number_list)

number_list2 = [2, 5, 100, 20, 50, 10, 91, 82]
max2 = max(number_list2)

if max1 > max2:
    print("첫 번째 리스트의 최댓값이 더 큽니다.")

elif max1 < max2:
    print("두 번째 리스트의 최댓값이 더 큽니다.")

else:
    print("첫 번째 리스트의 최댓값과 두 번째 리스트의 최댓값은 같습니다.")