function getTwo(){
    return 2;
};

console.log(getTwo());
console.log(2);

function getTwice(number){
    return number * 2;
};

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y)

function square(x){ // x = 3
    return x * x; // 3 * 3 = 9
}

console.log(square(3));


function square(x){
    console.log('return 전'); // retrun 전
    return x * x; 
    console.log('return 후') // return을 받고나면 더 이상 함수는 진행되지 않는다. 데드코드
}

console.log('함수 호출 전'); //함수호출전
console.log(square(3)); // 9 
console('함수 호출 후'); // 함수호출후  