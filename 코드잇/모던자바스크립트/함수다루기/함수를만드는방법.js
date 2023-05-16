// 함수를 만드는 방법



// function 함수이름(파라미터){
//     동작
//     return 리턴값
// }


// 함수 선언을 값처럼 활용하는 방법이 함수 표현식이다.
// 변수에 할당하는것이 포인트가 아닌 함수선언을 값처럼 사용하는 방식이다.

// 함수선언보다 함수호출을 먼저 사용하는 경우에는 호이스팅이라고 부른다
printCodeit();

function printCodeit(){
    console.log('Codeit');
};


printCodeit(); // 변수를 할당해서 함수를 만드는 함수표현식은 선언전에 접근이 불가능하다.

const printCodeit = function(){
    console.log('Codeit');
};


const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function(){
    console.log('button is clicked!')
});

// 함수 스코프
// 함수 안에 선언된 함수는 호출이 불가능하다.
function printCodeit(){
   function printJS(){
    console.log('JavaScript');
   }

   console.log('Codeit');
   printJS();
}

printCodeit();
printJS(); // ReferenceError


// 함수가 아닌 다른 코드 블록에서 함수를 선언하면 모두 전역적으로 호출이 가능하다.
const x = 4;

if (x < 5 ){
    function printJS() {
        console.log('JavaScript');
    }
}

{
    function printCodeit(){
        console.log('Codeit');
    }
}

printCodeit();
printJS(); 


// 함수표현식 경우에 할당된 변수에 따라 스코프가 결정되게 된다.

var printJS = function () {
   console.log('JavaScript');
};

let printHi = function () {
   console.log('Hi');
};

const printCodeit = function () {
  console.log('Codeit');
};

