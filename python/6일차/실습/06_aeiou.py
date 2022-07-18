

# 처음 출력물을 보면 12가 
# 출력이 되게 된다
word = "HappyHacking"

count = 0

# for문을 보면 "a"or "e" or로 연결이 되는데 
# 이렇게 코드를 짜게 되면 전부 참으로 나와
# 카운트가 늘어나고 HappyHacking의 길이가 나오게 된다
for char in word:
    # 따라서 "a"or "b"or 이 아닌 
    # char는 a이거나 char는 b이거나로 하나씩  조건을 붙여줘야한다 
    if char == "a" or char == "e" or char == "i" or char ==  "o" or char == "u":
        count += 1

print(count)
