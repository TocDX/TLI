# 문자열 word의 길이를 출력하는 코드를 각각 작성하시오.

# len() 함수를 바로 쓰기보다는 반복문을 활용하세요.

# happy를 word로 옮겨담는다.
word = 'happy!'
# happy를 세기 위한 변수
cnt = 0
# happy에 처음부터 마지막까지 읽기 위해 반복문
for i in word:
    # i안에 word를 담고
    # i에 변수값을 읽을 때마다 cnt가 1씩 증가
    cnt +=1 
print(cnt)
