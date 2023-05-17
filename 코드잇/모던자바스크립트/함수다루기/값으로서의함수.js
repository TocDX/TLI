// 값으로서 함수

// javascript의 함수는 어디에서나 할당될 수 있고 다양한 형태로 호출될 수 있다.
const printJS = function(){
    console.log('JavaScript');
};
printJS();

console.dir(0);
console.dir('codeit');
console.dir(true);
console.dir(null);
console.dir(undefined);
console.dir({});
console.dir([]);
console.dir(printJS);

// 객체안에 메소드로도 활용될 수 있다.

 const myObject = {
   brand: 'Codeit',
   bornYear: 2017,
   isVeryNice: true,
   sayHi: function(name) {
     console.log(`Hi! ${name}`);
   }
 };

 myObject.sayHi('JavascScript');

// 흔하지는 않지만 배열에 담아서 호출을 할 수도 있다.

 const myArray = [
   'codeit',
   2017,
   true,
   function(name) {
     console.log(`Hi! ${name}`);
   },
 ];

 myArray[3]('Codeit');

// 함수를 호출 할 때 미리 선언된 함수를 전달하면서 조건에 따라 그 함수가 나중에 호출되거나 호출되지 않는 동작을 볼 수 있다.
// 다른 파라미터에 호출된 함수를 콜백함수라 한다.
 function makeQuiz(quiz, answer, success, fail) {
   if (prompt(quiz) === answer) {
     console.log(success());
   } else {
     console.log(fail());
   }
 };

 function getSuccess() {
   return '정답';
 };

 function getFail() {
   return '오답!';
 };

 const question = '5 + 3 = ?';
 makeQuiz(question, '8', getSuccess, getFail);


 // 함수를 리턴하는 함수를 고차함수라고 한다.
 function getPrintHi() {
   return function () {
     console.log('Hi!?');
   };
 };

 const sayHi = getPrintHi();

 sayHi();
 getPrintHi()(); // 이중괄호를 사용해 바로 호출할 수 있다.