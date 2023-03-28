// 상수(constant)
// 일정하게 변하지 않는 수

const PI = 3.14; // 원주율  상수를 사용할 땐 변하지 않게 let이 아닌 const를 사용. 상수를 표현 할 때는 myNumber가 아닌 MY_NUMBER 등 대문자와 언더바 활용.
let radius = 0; // 반지름

// 원의 넓이를 계산하는 함수
function calculateArea(){
    return PI * radius * radius;
}

// 반지름에 따른 원의 넓이를 출력하는 함수
function printArea(){
    return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;
}


radius = 4; // radius의 값을 바꿔가며 결과값을 바꿔줌
console.log(printArea());

radius = 7;
console.log(printArea());

radius = 8;
console.log(printArea());