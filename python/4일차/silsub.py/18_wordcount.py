word = 'banana'

# 풀이 1
result ={}

for i in word:
    # 딕셔너리에 키가 없으면?
    if not i in result:
        # 키랑 값을 1으로 초기화한다.
        result[i] = 1

    #딕셔너리에 키가 있으면?
    else:
        result[i] += 1
print(result)




for i in word:
    # result['a'] 없으면 keyerror
    # result.get('a') 기본값이 none
    # result.get('a',0) 기본값이 0
        result[i] = result.get(i,0)+1
print(result)