function sayHello(){ // 1번부터 4번줄까진 함수를 정의하는 코드
    console.log('Hello');
    console.log('Welcome to Codeit');
}

console.log('함수 호출 전'); // 함수 호출 전이란 문자열을 출력
sayHello(); // sayHello를 호출하여 'Hello'와 Welcome to Codeit을 호출
console.log('함수 호출 후') //  함수 호출 후 출력

function square(x){ // 10번부터 12번줄까지 square 정의하는 함수
    return x * x;
}

console.log('함수 호출 전'); // 함수 호출 전
console.log(square(5)); // 파라미터로 5를 보내준다. 5*5는 25로 바뀐다.
console.log('함수 호출 후'); // 함수 호출 후


function square(x){ // 10번부터 12번줄까지 square 정의하는 함수
    return x * x;
}

console.log('함수 호출 전'); // 함수 호출 전
console.log(square(3) + square(4)); // 파라미터로 3과 4를 보내주고 9와 16을 더해 25가 출력된다.
console.log('함수 호출 후'); // 함수 호출 후