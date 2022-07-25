실수 2개를 입력받아
합을 출력하는 프로그램을 작성해보자.



- 입력

  ```
  2개의 실수가 줄을 바꿔 입력된다.
  
  
  ```
  
- 출력

  ```
  두 실수의 합을 출력한다.
  ```

- 입력 예시

  ``` python
  0.1
  0.9
  ```

  

- 출력 예시

  ```python
  1.0
  ```

  

---

- 답변 

  ``` python
  #키보드 입력값을 통해 문자열을 입력받는다
  a = input()
  b = input()
  a = float(a) # 실수형으로 형변환 시켜준다
  b = float(b)
  c = a + b # 합친다
  print(c))
  ```

  

- 모범 답변

  ``` python
  a = input()
  b = input()
  a = float(a)
  b = float(b)
  c = a + b
  print(c)
  
  
  ```
  
  