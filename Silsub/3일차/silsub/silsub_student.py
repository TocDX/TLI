# 주어진 리스트가 반장 선거 투표 결과일 때 
# 이영희의 총 득표수를 출력하시오



# 리스트
students = ['이영희', '김철수', '이영희', '조민지', '김철수', '조민지', '이영희', '이영희']
# 중복된 값에 횟수를 구하기 위한 변수
count = 0
# 영희를 찾기 위한 변수
a = '이영희'

# 리스트의 처음부터 끝까지 보기 위해 for문 사용
for i in students:
    # i가 a라면
    if i == a:
        # 카운트의 숫자를 1씩 증가시켜라
        count += 1
print(i, count)