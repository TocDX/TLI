문자 1개를 입력받아 그 다음 문자를 출력해보자.
영문자 'A'의 다음 문자는 'B'이고, 숫자 '0'의 다음 문자는 '1'이다.

예시
...
print(chr(n+1))

- 입력

  ```
  문자 1개가 입력된다.
  
  ```
  
- 출력

  ```
  그 다음 문자를 출력한다.
  ```

- 입력 예시

  ``` python
  a
  ```
  
  
  
- 출력 예시

  ```python
  b
  ```

  

---

- 답변 

  ``` python
  a = input()
  n = ord(a)
  
  print(chr(n+1))
  ```

  

- 모범 답변

  ``` python
  n1=input()
  n2=ord(n1)+1
  s=chr(n2)
  print(s)
  
  ```
  
  