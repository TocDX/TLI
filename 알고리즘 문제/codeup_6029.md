16진수를 입력받아 8진수(octal)로 출력해보자.

예시
a = input()
n = int(a, 16)   #입력된 a를 16진수로 인식해 변수 n에 저장
print('%o' % n) #n에 저장되어있는 값을 8진수(octal) 형태 문자열로 출력



- 입력

  ```
  16진 정수 1개가 입력된다.
  
  
  ```
  
- 출력

  ```
  8진수 형태로 출력한다.
  ```

- 입력 예시

  ``` python
  f
  ```
  
  
  
- 출력 예시

  ```python
  17
  ```

  

---

- 답변 

  ``` python
  a = input()
  n = int(a, 16)
  print('%o',%n)
  ```
  
  
  
- 모범 답변

  ``` python
  a = input()
  n = int(a, 16)
  print('%o',%n)
  
  ```
  
  