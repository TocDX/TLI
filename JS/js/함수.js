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