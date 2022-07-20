# 다음 코드의 결괏값은 무엇일까?
a = "Life is too short, you need python"

if "wife" in a: print("wife")
elif "python" in a and "you" not in a: print("python")
elif "shirt" not in a: print("shirt") 
elif "need" in a: print("need")
else: print("none")

# while문을 사용해 1부터 1000까지의 자연수 중 3의 배수의 합을 구해 보자
cnt = 0
i = 1
while i <= 1000:
    if i % 3 == 0:
        cnt += i
    i+=1
print(cnt)

# while문을 사용하여 다음과 같이 별(*)을 표시하는 프로그램을 작성해 보자.
i = 0
while True:
    i += 1
    if i > 5: break
    print('*'*i)

# for문을 사용해 1부터 100까지의 숫자를 출력해 보자.
for i in range(1,101):
    print(i)

# A 학급에 총 10명의 학생이 있다. 이 학생들의 중간고사 점수는 다음과 같다.
# for문을 사용하여 A 학급의 평균 점수를 구해 보자. 
A = [70, 60, 55, 75, 95, 90, 80, 80, 85, 100]
total = 0
for i in A:
    total += i
    avg = total/len(A)
print(avg)

# 리스트 중에서 홀수에만 2를 곱하여 저장하는 다음 코드가 있다.

numbers = [1, 2, 3, 4, 5]
result = [n*2 for n in numbers if n%2==1]
print(result)