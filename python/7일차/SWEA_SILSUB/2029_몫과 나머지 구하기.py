t = int(input())
for i in range(1, t+1):	
	# 두정수를 정수로 형변환 후 쪼개줘라	
	a, b = map(int, input().split())
	# #1 a와b의 나머지 a와b의 몫을 나타내라
	print("#{} {} {}".format(i, a//b, a%b))