
10진수를 입력받아 16진수(hexadecimal)로 출력해보자.

예시
a = input()
n = int(a)      #입력된 a를 10진수 값으로 변환해 변수 n에 저장
print('%x'% n) #n에 저장되어있는 값을 16진수(hexadecimal) 소문자 형태 문자열로 출력



- 입력

  ```
  10진수 1개가 입력된다.
  
  
  ```
  
- 출력

  ```
  16진수(대문자) 형태로 출력한다.
  ```

- 입력 예시

  ``` python
  255
  ```
  
  
  
- 출력 예시

  ```python
  FF
  ```

  

---

- 답변 

  ``` python
  a = input()
  n = int(a)  
  print('%X'% n)
  ```
  
  
  
- 모범 답변

  ``` python
  a = input()
  n = int(a)  
  print('%X'% n)
  
  ```
  
  