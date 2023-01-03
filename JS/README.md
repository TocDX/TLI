## Java Script

### Java Script란?

-

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

    ```html
    let fruits = ['Apple', 'Banana', 'Cherry'];

    console.log(fruits[0]); // 'Apple'
    console.log(fruits[1]); // 'Banana'
    console.log(fruits[2]); // 'Cherry'
    ```

### 데이터 종류
- String
    - 문자 데이터
    ```html
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
    ```html
    let number = 123; //정수
    let opacity = 1.57; //부동소수점
    
    console.log(number); // 123
    console.log(opacity); // 1.57
    ```

- Boolean
    - 논리 데이터
    - true, false 두 가지 값 밖에 없는 논리 데이터.
    ```html
    let checked = true;
    let isShow = false;

    console.log(checked); // true
    console.log(isShow); // false
    ```
- Undefined
    - 값이 할당되지 않은 상태를 나타낸다.
    ```html
    let undef;
    let obj = { abc: 123 };

    console.log(undef); // undefined
    console.log(obj.abc); // 123
    console.log(obj.xyz); // undefined
    ```
- Null
    - 어떤 값이 의도적으로 비어있음을 의미하는 데이터.
    ```html
    let empty = null;

    console.log(empty); // null
    ```
- Object
    - 객체 데이터
    - 여러 데이터를 Key:Value 형태로 저장한다. { }
    ```html
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
    ```html
    let fruits = ['Apple', 'Banana', 'Cherry'];

    console.log(fruits[0]); // 'Apple'
    console.log(fruits[1]); // 'Banana'
    console.log(fruits[2]); // 'Cherry'
    ```

### 변수

- 데이터를 저장하고 참조(사용)하는 **데이터의 이름**
    - var, let, const

    ```html
    // 재사용이 가능하다.

    let a = 2;
    let b = 5;

    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);

    // 값(데이터)의 재할당 가능

    let c = 12;
    console.log(c);

    c = 999;
    console.log(c);

    // 값(데이터)의 재할당 불가

    const d = 12;
    console.log(d);

    d = 999;
    console.log(d); // 변수.js:24 Uncaught TypeError: Assignment to constant variable
    ```

### 예약어

- 특별한 의미를 가지고 있어, 변수나 함수 이름 등으로 사용할 수 없는 단어
    - Reserved Word

        ```html
        // SyntaxError: Unexpected token 'this'
        // 예약이 되어져 있는 단어이기 때문에 사용 할 수 없다
        let this = 'Hello'

        let if = 123;

        let break = true;
        ```

### 함수

- 특정 동작(기능)을 수행하는 일부 코드의 집합(부분)
    - function

    ```html
    // 함수 선언
    function helloFunc(){
        // 실행 코드
        console.log(1234);
    }

    // 함수 호출
    helloFunc(); // 1234

    function returnFunc(){
        return 123;
    }

    let d = returnFunc();

    console.log(d) 


    // 함수 선언
    function sum(e,f) { // a와 b는 매개변수(Parameters)
        return e + f;
    }

    // 재사용

    let e = sum(1, 2); // 1과 2는 인수(Arguments)
    let f = sum(7, 12);
    let g = sum(2, 4);

    console.log(e,f,g)


    // 기명(이름이 있는) 함수
    // // 함수 선언
    // function hello(){
    //     console.log('Hello~');
    // }

    // // 익명(이름이 없는) 함수
    // // 함수 표현
    // let world = function () {
    //     console.log('World');
    // }

    // // 함수 호출
    // hello();
    // world();

    // 객체 데이터

    const heropy = {
        name: 'HEROPY',
        age: 85,
        // 메소드(Method)
        getName: function () {
            return this.name
        }
    };

    const hisName = heropy.getName();
    console.log(hisName);
    console.log(heropy.getName);
    ```

### 조건문

- 조건의 결과(truthy, falsy)에 따라 다른 코드를 실행하는 구문. if, else

    ```html
`   let isShow1 = true;
    let checked  = false;

    if (isShow1) {
        console.log('Show');
    }

    if (checked) {
        console.log('Checked');
    }

    if (isShow1){
        console.log('show');
    }else{
        console.log('hide');
    }`
    ```

### DOM API

- Document Object Model, Application Programming Interface
    - Document : Html에 들어있는 object(div, span, input)
    - API : 웹사이트가 동작하기 위해서 쓰는 프로그래밍

    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <script src="/js/데이터종류.js"></script>
        <script src="/js/변수.js"></script>
        <script src="/js/함수.js"></script>
        <script src="/js/조건문.js"></script>
        <script src="/js/dom.js"></script> // 이상태로 콘솔창을 보면 null이 뜬다. 위에서 아래로 탐색을 할 때 먼저 dom.js가 실행이 되어서 null값이 나오게 된다.
                                           // 이부분을 해결하기 위해서는 div태그 밑으로 dom.js를 입력하거나 defer를 사용하면 된다.
    </head>
    <body>
        <div class="box">Box</div>
    </body>
    </html>
    ```

    ```html
    // HTML 요소(Element) 1개 검색/찾기
    let boxEl = document.querySelector('.box'); //querySelector가 정의 되어있다. 선택자box

    // HTML 요소에 적용할 수 있는 메소드!
    boxEl.addEventListener(); // 요소에 메소드를 추가할 수 있다.

    // 인수(Arguments)를 추가 가능
    boxEl.addEventListener(1, 2); // 두개의 인수를 추가할 수 있다.

    // 1- 이벤트(Event, 상황)
    boxEl.addEventListener('click', 2);

    // 2 - 핸들러(Handler, 실행할 함수)
    boxEl.addEventListener('click', function(){
        console.log('Click~!');
    });

    // HTML 요소(Element) 1개 검색/찾기
    let boxEl = document.querySelector('.box'); //querySelector가 정의 되어있다. 선택자box

    // 요소의 클래스 정보 객체 활용
    boxEl.classList.add('active');
    let isContains = boxEl.classList.contains('active');
    console.log(isContains); // true

    boxEl.classList.remove('active');
    isContains = boxEl.classList.contains('active');
    console.log(isContains); // false


    // HTML 요소(Element) 모두 검색/찾기
    const boxEle = document.querySelectorAll('.box');

    // 찾은 요소들 반복해서 함수 실행
    // 익명 함수를 인수로 추가
    boxEle.forEach(function(){});

    // 첫 번째 매개변수(boxEle): 반복 중인 요소
    // 두 번째 매개변수(index): 반복 중인 번호
    boxEle.forEach(function(boxele, index){});

    // 출력
    boxEle.forEach(function (boxEle, index){
        boxEle.classList.add('order-${index +1}');
    });

    const boxEl = document.querySelector('.box');

    // Getter, 값을 얻는 용도
    console.log(boxEl.textContent); // Box

    // Setter, 값을 지정하는 용도
    boxEl.textContent = 'HELLOW';
    console.log(boxEl.textContent)
    ```