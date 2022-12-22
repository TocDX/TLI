// 문자 데이터 String

let myName = "HELLOW";
let email = "HELLOW@gmail.com";
let hello = `Hello ${ myName }?!`; // `백틱 기호로 사용

console.log(myName); // HELLOW
console.log(email); // HELLOW@gmail.com
console.log(hello); // Hello HELLOW?!


// 숫자 데이터 Number

let number = 123; //정수
let opacity = 1.57; //부동소수점
    
console.log(number); // 123
console.log(opacity); // 1.57

// 논리 데이터 Boolean

let checked = true;
let isShow = false;

console.log(checked); // true
console.log(isShow); // false

// 할당되지 않은 데이터 Undefined

let undef;
let obj = { abc: 123 };

console.log(undef); // undefined
console.log(obj.abc); // 123
console.log(obj.xyz); // undefined

// 의도적으로 비운 데이터 Null

let empty = null;

console.log(empty); // null

// 객체 데이터 Object

let user = {
    //Key:Value,
    name: 'HI',
    age : 85,
    isValid: true
};

console.log(user.name); //HI
console.log(user.age); //85
console.log(user.isValid); //true

// 배열 데이터 Array

let fruits = ['Apple', 'Banana', 'Cherry'];

    console.log(fruits[0]); // 'Apple'
    console.log(fruits[1]); // 'Banana'
    console.log(fruits[2]); // 'Cherry'