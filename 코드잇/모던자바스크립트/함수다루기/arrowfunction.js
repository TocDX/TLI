// Arrow Function

// 기존의 함수방식보다 간결하게 해준다
// 이름이 없는 익명함수이다.
// 상황에 따라서는 짧게 표현도 가능하다.

const getTwice = (number) => {
    return number * 2;
};

console.log(getTwice(5));

const getTwice = number => number * 2;
console.log(getTwice(6));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click',  ()  => {
    console.log('button is clicked!');
});