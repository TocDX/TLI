# t = int(input())
# for _ in range(1,t+1):
#     word = list(input())
#     score = 0
#     cnt = 0
#     for i in word:
#         if i == "O":
#             cnt +=1
#             score += cnt
#         else:
#             cnt = 0
#     print(score)


word = input()
score = 0
cnt = 0
for i in word:
    if i == "O":
        cnt +=1
        score += cnt
        

    else:
        cnt = 0
print(score)