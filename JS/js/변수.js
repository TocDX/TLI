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
console.log(d); // 변수.js:24 Uncaught TypeError: Assignment to constant variable.

// SyntaxError: Unexpected token 'this'
// 예약이 되어져 있는 단어이기 때문에 사용 할 수 없다
let this = 'Hello'

let if = 123;

let break = true;