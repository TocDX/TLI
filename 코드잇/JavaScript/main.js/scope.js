// Scope : 범위, 영역

console.log(x); // 변수가 선언되지 않아 오류가 뜬다.
let x = 3; // 글로번 변수, 전역 변수 (Global Variable) 모든 곳에서 사용이 가능한 변수.

function myFunction(){ // 블록문 (Block Statement)
let x = 3; // 로컬변수, 지역 변수 (Local Variable) 블록문안에서만 사용 가능하다.
console.log(x); // 3

};

myFunction(); //3
console.log(x)// 에러 x에 값이 없다