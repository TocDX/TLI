## Java Script

### 표기법

- dash-case(kebab-case)
    - the-quick-brown-fox-jumps-over....(대쉬기호를 활용하는 표기법) html,css에서 활용
- snake_case
    - the_quick_brown_fox_jumps_over....(언더바를 활용하는 표기법) html,css에서 활용
- camelCase
    - theQuickBrownFoxJumpsOver....(하나의 단어앞에 대문자를 활용하는 표기법) JS에서 활용) **대부분 camelCase를 사용**
- PascalCase
    - TheQuickBrownFoxJumpsOver....(모든 단어 앞에 대문자를 활용하는 표기법) JS에서 활용
- Zero-based Numbering
    - 0 기반 번호 매기기(특수한 경우를 제외하고 0부터 숫자를 시작한다.)

    ```python
    let fruits = ['Apple', 'Banana', 'Cherry'];

    console.log(fruits[0]); // 'Apple'
    console.log(fruits[1]); // 'Banana'
    console.log(fruits[2]); // 'Cherry'
    ```

### 데이터 종류
- String
    - 문자 데이터
    ```python
    let myName = "HELLOW";
    let email = "HELLOW@gmail.com";
    let hello = 'Hello ${myName}?!';

    console.log(myName); // HELLOW
    console.log(email); // HELLOW@gmail.com
    console.log(hello); // Hello HELLOW?!
    ```

- Number
    - 숫자 데이터
    - 정수 및 부동소수점 숫자를 나타낸다.
    ```python
    let number = 123; //정수
    let opacity = 1.57; //부동소수점
    
    console.log(number); // 123
    console.log(opacity); // 1.57
    ```

- Boolean
    - 논리 데이터
    - true, false 두 가지 값 밖에 없는 논리 데이터.
    ```python
    let checked = true;
    let isShow = false;

    console.log(checked); // true
    console.log(isShow); // false
    ```
- Undefined
    - 값이 할당되지 않은 상태를 나타낸다.
    ```python
    let undef;
    let obj = { abc: 123 };

    console.log(undef); // undefined
    console.log(obj.abc); // 123
    console.log(obj.xyz); // undefined
    ```
- Null
    - 어떤 값이 의도적으로 비어있음을 의미하는 데이터.
    ```python
    let empty = null;

    console.log(empty); // null
    ```
- Object
    - 객체 데이터
    - 여러 데이터를 Key:Value 형태로 저장한다. { }
    ```python
    let user = {
        //Key:Value,
        name: 'HI',
        age : 85,
        isValid: true
    };

    console.log(user.name); //HI
    console.log(user.age); //85
    console.log(user.isValid); //true
    ```
- Array
    - 배열 데이터
    - 여러 데이터를 순차적으로 저장한다. [ ]
    ```python
    let fruits = ['Apple', 'Banana', 'Cherry'];

    console.log(fruits[0]); // 'Apple'
    console.log(fruits[1]); // 'Banana'
    console.log(fruits[2]); // 'Cherry'
    ```

