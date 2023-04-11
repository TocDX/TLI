// 내장 객체 (Standard built-in objects)
// 자바스크립트의 모든 것이 다 객체다. 그 중 대표적인 날짜 객체(Date 객체)

let myDate = new Date(특정한 값 or '문자열' or 값,값,값);

let myDate = new Date(1000);

let myDate = new Date('2023-04-11T19:20:15');

let myDate = new Date(YYYY, MM, DD, hh, mm, ss, ms);

console.log(myDate)

// Date.getTime()
let myDate = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate.getTime());


let today= new Date();

let timeDiff = myDate.getTime() = today.getTime();

console.log(timeDiff + '밀리초');
console.log(timeDiff + '초');
console.log(timeDiff / 1000 / 60 + '분');
console.log(timeDiff / 1000 / 60 / 60 + '시간');