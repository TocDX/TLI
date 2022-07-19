

with open('students.txt', 'r', encoding='utf-8') as f:
   # lines = f.readlines()
    for line in f:
        print(line, end='')