공백을 두고 문자(character) 2개를 입력받아 순서를 바꿔 출력해보자



- 입력

  ```
  2개의 문자가 공백으로 구분되어 입력된다.
  
  ```

- 출력

  ```
  2개의 문자를 순서를 바꿔 한 줄로 출력한다.
  
  ```

- 입력 예시

  ``` python
  a b
  ```

  

- 출력 예시

  ```python
  b a
  ```

  

---

- 답변 

  ``` python
  a,b= input().split() #키보드 입력값을 입력해주고 스플릿으로 공백을 쪼개 각각 a b를 								  입력하게 해준다.
  print(b) # 출력 예시에 b와a가 나와야하므로 b,a를 출력해준다
  print(a)  
  ```

  

- 모범 답변

  ``` python
  a,b=input().split()
  print(b)
  print(a)
  
  ```

  