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


// 간단하게 시간 정보 알아내기!
// 간단하게 시간 정보를 표현하고 싶다면 아래와 같은 메소드를 활용해 볼 수도 있습니다.

let myDate = new Date();

console.log(myDate.toLocaleDateString()); // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocaleString()); // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)
toLocaleDateString(), toLocaleTimeString(), toLocaleString() 
// 메소드는 사용자의 브라우저에 설정된 국가의 표기에 맞춰 날짜와 시간을 보여줍니다. 
