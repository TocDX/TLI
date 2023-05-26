자바스크립트에서 함수를 표현하는 방법에는 여러 가지가 있다.

Function Declaration(함수 선언식),
Function Expression(함수 표현식),
Arrow Function(화살표 함수) 등이 있다.  

그리고 Function Expression의 경우에는

2-1. 함수에 이름이 붙어있는 Named Function Expression과 
2-2. 함수에 이름이 없는 Anonymous Function Expression으로 나눌 수 있고,

Arrow Function의 경우 함수 내부의 내용에 따라 더 축약(shorten)해서 나타낼 수도 있다..

각각의 경우에 async 키워드를 어떻게 붙이는지 살펴보자.

```js
// 1) Function Declaration
async function example1(a, b) {
  return a + b;
}

// 2-1) Function Expression(Named)
const example2_1= async function add(a, b) {
  return a + b;
};

// 2-2) Function Expression(Anonymous)
const example2_2 = async function(a, b) {
  return a + b;
};

// 3-1) Arrow Function
const example3_1 = async (a, b) => {
  return a + b;
};

// 3-2) Arrow Function(shortened)
const example3_2 = async (a, b) => a + b;
각 함수 표현 방식에서 async는 이런 식으로 붙이면 되는데요. 각각의 경우에 async를 어디에 붙였는지 기억해두세요. 
참고로, 자바스크립트에는 함수를 정의하면서 동시에 실행하는 즉시실행함수(Immediately-invoked function expression, IIFE)라는 개념도 있는데요.

(function print(sentence) {
  console.log(sentence);
  return sentence;
}('I love JavaScript!'));

(function (a, b) {
  return a + b;
}(1, 2));

((a, b) => {
  return a + b; 
})(1, 2);

((a, b) => a + b)(1, 2);
이런 식으로 함수를 바로 정의와 동시에 실행하는 것을 의미합니다. 보통 초기화 코드 등에서 함수를 단 한 번만 실행하기 위한 목적으로 이 즉시실행함수를 사용하는데요. 이런 경우에도 async를 이렇게 붙일 수 있습니다.

(async function print(sentence) {
  console.log(sentence);
  return sentence;
}('I love JavaScript!'));

(async function (a, b) {
  return a + b;
}(1, 2));

(async (a, b) => {
  return a + b; 
})(1, 2);
```