# 문자열 word가 주어질 때, 해당 문자열에서 a 가 
# 처음으로 등장하는 위치(index)를 출력해주세요.
# a 가 없는 경우에는 -1을 출력해주세요.

word = 'babbbbbbb'
cnt = 0
a = 'a'

#1번 for~else 풀이

#문자로 순회하는 것이 아니라
#인덱스로 접근해라
# 원하는 숫자를 얻는 방법은 range(len(word)) = > range(6) 1, 2, 3, 4, 5
for i in range(len(word)):
    # print(word[i])
    # 알파벳이 a일때
    if word[i] == a:
        print(i)
        break
# for문을 다 돌았다는 뜻은
# 한번도 break에 안걸렸다
# 즉 a는 없었다
else:
    print(-1)


# 2 for~else 풀이

# a가 있었냐 없었냐 (boolean)
is_a = False
for i in range(len(word)):
    if word[i] == a:
        print(i)
        is_a = True
        break

if not is_a:
    print(-1)