# 처음 시작 값
n = 0
# 0 부터 더하기 위해
result = 0
# user_input 값
user_input = int(input())

# 1. 
# while n  <= user_input :
 #   result += n
#    n += 1
 #print(result)

 while n < user_input:
    print(f'n: {n}, result{result}')
    n += 1
    result += n
    print(result)