# 'r' : read(읽기 전용)
# 'w' : write(쓰기 전용)
# 'a': appen


with open('text.txt', 'w', encoding='UTF-8')as f:
    f.write('Happy Hacking \n')
    for i in range(1, 6):
        f.write(f'{i} 번째 \n')