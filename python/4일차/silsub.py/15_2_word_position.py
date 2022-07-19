# 문자열 word가 주어질 때, 해당 문자열에서 a 의 모든 위치(index)를 출력해주세요.

word = 'HappyHacking'
a = 'a'
result = []

# 기록을 하는 방법
for i in range(len(word)):
    if word[i] == a:
        #리스트를 추가해줘
        result.append[i]
print(result)

# 2. 그때 그때 출력 
word = 'HappyHacking'
a = 'a'
lst = []

for i in range(len(word)):
    if word[i] == a:
        #리스트를 추가해줘
        print(i, end=' ')
