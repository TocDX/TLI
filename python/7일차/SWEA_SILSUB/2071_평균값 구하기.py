t = int(input())

for i in range(1, t + 1):
    # 두 정수를 입력 받아야 하니 a,b를 정수로 형변환 시켜주고 쪼개준다
    a, b= map(int,input().split())
    # 만약 a가 b보다 작다면
    if a < b:
        # #1 <로 나타내주고
        print("#{} <".format(i))
    # a가 b랑 같다면 
    elif a == b:
        # #2 =로 나타내줘라
        print("#{} =".format(i))
    # a가 b보다 크다면
    elif a > b:
        # #3 >로 나타내줘라
        print("#{} >".format(i))
