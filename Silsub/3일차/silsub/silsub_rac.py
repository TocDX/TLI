# 가로와 세로의 길이를 각각 a, b로 받아 사각형 넓이와 둘레를 함께 반환하는 함수 rectangle을 정의하시오. 
# 사각형이 가로가 20, 세로가 30일 때의 결과를 출력하시오.

# * 사각형 넓이 : 가로 * 세로
# * 사각형 둘레 : (가로 + 세로) * 2

# 함수값을 입력 받기 위해 함수 호출
def rectangle(a, b):
    # 넓이와 둘레를 구하기 위해 
    # a*b 값을 r에 (a+b)*2 값음 w에 입력
    r = a * b
    w = (a + b) * 2
    # r, w  리턴값을 받아준다
    return r, w
    # 가로가 20 세로 30일 때의 결과이니
    # rectangle 20,30 입력
result = rectangle(20, 30)
print(result)
