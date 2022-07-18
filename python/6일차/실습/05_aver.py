# 처음 출력을 하게 되면 55의 숫자가 나올것이다
number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

total = 0
count = 0
# number 안에 number_list를 추가해준다
for number in number_list:
    # number가 세지면서 넘버에 있는 리스트들의 값이 더해진다
    total += number
# 이부분에서 문제가 생긴다 
# count+=1이 for문 밖에 있기 때문에 conut의 값이 올라가질 않는다
# 따라서 count를 for문 안으로 넣어준다
    count += 1
# 다 넣었는데 결과값음 다를것이다 
# 이는 연산자 기호중 몫인 //가 들어가 있기 떄문에
# 나누기를 하려면 /만 입력해주면 된다.
print(total/count)