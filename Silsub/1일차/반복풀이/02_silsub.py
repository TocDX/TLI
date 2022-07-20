# 문자열 word의 길이를 출력하는 코드를 각각 작성하시오.
# len() 함수를 바로 쓰기보다는 반복문을 활용하세요.

# word에 happy!를 대입해준다
word = 'happy!'
# 문자열에 길이를 알려주는 len()함수를 사용하지 말라는
# 조건이 있었기에 카운트 할 수 있는 변수를 선언해준다
cnt = 0
# for 반복문을 시작하고
for i in word:
    #카운트가 될 때 happy를 읽게 
    #변수선언해준다
    word += i
    # happy!를 읽을때 카운팅 해줄 때 변수선언해준다
    cnt += 1
print(cnt)