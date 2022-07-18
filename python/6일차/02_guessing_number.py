
num = input('숫자 입력:')
print(num)


try:
    if int(num) == 5:
        print('오오')
    else:
        print('오가아닙니다')
except:
    print('숫자를입력하지 않았습니다')