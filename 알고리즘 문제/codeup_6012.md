줄을 바꿔 정수(integer) 2개를 입력받아 줄을 바꿔 출력해보자.

- 입력

  ```
  2개의 정수가 줄을 바꿔 입력된다.
  ```

- 출력

  ```
  입력된 두 정수를 줄을 바꿔 출력한다.
  
  ```

- 입력 예시

  ``` python
  1
  2
  ```

  

- 출력 예시

  ```python
  1
  2
  ```

  

---

- 답변 

  ``` python
  a = input() #키보드 입력값을 입력해준다
  b = input()
  a = int(a) # 출력할 때 정수형이 나와야하니 문자열을 정수형으로 변환해준다
  b = int(b)
  print(a) # a와 b가 출력되야 하니 각각 프린트문으로 출력해준다
  print(b) 
  
  ```

  

- 모범 답변

  ``` python
  a=input() 
  b=input()
  print(a)
  print(b)
  ```

  