"연도.월.일"을 입력받아 "일-월-연도" 순서로 바꿔 출력해보자.



- 입력

  ```
  연도, 월, 일이 닷('.')으로 구분되어 입력된다.
  
  ```

- 출력

  ```
  대시(마이너스 기호)를 구분기호로 사용해서
  일-월-연도로 바꿔 출력한다.
  
  ```

- 입력 예시

  ``` python
  2020.3.4
  ```

  

- 출력 예시

  ```python
  4-3-2020
  ```

  

---

- 답변 

  ``` python
  y, m, d = input().split('.') 
  #키보드 입력값을 통해 문자열을 입력받고 split으로 .을 쪼개준다
  print(d, m, y, sep="-") 
  # 일 월 연도 이니 d,m,y로 넣어주고 -를 입력하라 하였으니 sep로 -입력해준다
  ```

  

- 모범 답변

  ``` python
  y, m, d = input().split('.')
  print(d,m,y,sep='-')
  ```

  