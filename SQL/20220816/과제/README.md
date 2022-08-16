# 사전 설정

## 실행

```bash
$ sqlite3 healthcare.sqlite3 
```

## Column 출력 설정

```sql
sqlite3> .headers on 
sqlite3> .mode column
```

## table 및 스키마 조회

```sql
sqlite3> .tables
healthcare

sqlite3> .schema healthcare
CREATE TABLE healthcare (
id PRIMARY KEY,        
sido INTEGER NOT NULL, 
gender INTEGER NOT NULL,
age INTEGER NOT NULL,  
height INTEGER NOT NULL,
weight INTEGER NOT NULL,
waist REAL NOT NULL,   
va_left REAL NOT NULL, 
va_right REAL NOT NULL,

blood_pressure INTEGER 
NOT NULL,
smoking INTEGER NOT NULL,
is_drinking BOOLEAN NOT NULL
);
```

# 문제

### 1. 추가되어 있는 모든 데이터의 수를 출력하시오.

```sql
SELECT COUNT(*) FROM healthcare;
```

```
COUNT(*)
--------
1000000
```

### 2. 나이 그룹이 10(age)미만인 사람의 수를 출력하시오.

```sql
SELECT COUNT(*) FROM healthcare  WHERE age < 10;
```

```
COUNT(*)
--------
156277
```

### 3. 성별이 1인 사람의 수를 출력하시오.

```sql
SELECT COUNT(*) FROM healthcare WHERE gender = 1;
```

```
COUNT(*)
--------
510689
```

### 4. 흡연 수치(smoking)가 3이면서 음주(is_drinking)가 1인 사람의 수를 출력하시오.

```sql
SELECT COUNT(*) FROM healthcare WHERE smoking = 3 and is_drinking = 1;
```

```
COUNT(*)
--------
150361
```

### 5. 양쪽 시력이(va_left, va_right) 모두 2.0이상인 사람의 수를 출력하시오.

```sql
SELECT COUNT(*) FROM healthcare WHERE va_left >= 2 and va_right >= 2;
```

```
COUNT(*)
--------
2614
```

### 6. 시도(sido)를 모두 중복 없이 출력하시오.

```sql
SELECT DISTINCT sido FROM healthcare;
```

```
sido
----
36
27
11
31
41
44
48
30
42
43
46
28
26
47
45
29
49
```

### 자유롭게 조합해서 원하는 데이터를 출력해보세요.

20살 이상 22살 이하 사람들의 id를 조회하시오

```sql
SELECT COUNT(*) FROM healthcare WHERE age >= 20 and age <= 22;
```

```
COUNT(*)
--------
0
```

10살의 남여 수를 구하시오

```sql
SELECT COUNT(*) FROM healthcare WHERE age = 10;
```

```
COUNT(*)
--------
144165
```

10살 이상 양쪽시력 1.5 이상의 사람 수를 구하시오

```sql
SELECT COUNT(*) FROM healthcare WHERE age >= 10 and va_left >= 1.5 and va_right >= 1.5;
```

```
COUNT(*)
--------
30794
```

키 180 이상 몸무게 50kg 이상의 사람의 수를 구하시오

```sql
SELECT COUNT(*) FROM healthcare WHERE height >= 180 and weight = 50;
```

```
COUNT(*)
--------
32
```

흡연수치가 3이고 음주 수치가 2이고 좌우 시력이 1.5이고 키가 180 이상 남자 id 수를 구하시오1

```sql
 SELECT COUNT(id) FROM healthcare WHERE height >= 180 and is_drinking = 2 and smoking = 3 and va_left = 1.5 and va_right = 1.5 and gender = 1;
```

```
COUNT(id)
---------
0
```

5번째 사람의 정보를 구하시오

```sql
SELECT id, sido, gender, age, height, weight, waist, va_left, va_right, blood_pressure, smoking, is_drinking FROM healthcare LIMIT 1 OFFSET 4;
```

```
id  sido  gender  age  height  weight  waist  va_left  va_right  blood_pressure  smoking  is_drinking
--  ----  ------  ---  ------  ------  -----  -------  --------  --------------  -------  -----------
5   41    2       12   155     50      75.2   1.5      1.2       144             1        0
```