

# 문자열 word가 주어질 때, 해당 문자열에서 a 개수를 구하세요.
# count() 메서드 사용 금지

# 문자열 word 변수 선언
word = 'banana'
# a를 카운팅 할수 있는 변수 서언
cnt = 0
# a = 'a' 문자열 변수선언
a = 'a'

# banana를 끝까지 반복하기 위해 for 반복문
for i in word:
    print(i)
    # 만약 i[word(banana)]가  a('a')가 같다면
    if i == a:
        print(i)
        # 카운트 1씩 증가시켜라.
        cnt +=1
        
print(cnt)
