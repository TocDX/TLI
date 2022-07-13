정수 2개(a, b)를 입력받아 a에서 b를 뺀 차를 출력하는 프로그램을 작성해보자.

예시
...
c = a - b
print(c)

- 입력

  ```
  2개의 정수가 공백으로 구분되어 입력된다.
  
  ```
  
- 출력

  ```
  첫 번째 정수에서 두 번째 정수를 뺀 차를 출력한다.
  ```

- 입력 예시

  ``` python
  123 -123
  ```
  
  
  
- 출력 예시

  ```python
  246
  ```

  

---

- 답변 

  ``` python
  a,b = map(int,input().split())
  
  print(a-b)
  ```

  

- 모범 답변

  ``` python
  a, b = input().split()
  c = int(a)-int(b)
  print(c)
  
  ```
  
  