출력문 연습의 마지막 문제이다.
(생각과 시도를 많이 해야하는 문제들은 한 두 문제씩 넘겼다가 나중에 풀어보면 된다.)

이번에는 다음과 같은 python프로그램의 소스코드를 출력해보자.

print("Hello\nWorld")

위 코드를 정확히 그대로 출력하시오.(공백문자 주의)

 

print 명령 안에 서식 문자로 \n을 사용하면 줄 바꿈(new line) 문자로 사용된다.

그렇다면 \n을 화면에 그대로 출력하려면 어떻게 해야될까?

- 입력

  ```
  입력 없음
  ```

- 출력

  ```
  print("Hello\nWorld")
  를 출력한다.
  ```

- 입력 예시

- 출력 예시

  ```python
  print("Hello\nWorld")
  ```

  

---

- 답변 

  ``` python
  print("print(\"Hello\\nWorld\")") 
  # -> 따옴표가 표현될 수 있도록 \",\' 사용한다 
  ```

  

- 모범 답변

  ``` python
  print("print(\"Hello\\nWorld\")")
  ```

  