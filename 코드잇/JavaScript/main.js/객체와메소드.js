// 메소드 (Method)
let greetings = {
    sayHello: function (name) { // parameter가 필요한 경우
        console.log(`Hello ${name} !`);
    },
    sayHi: function (){
        console.log('Hi!');
    },
    sayBye: function (){
        console.log('Bye!'); //console : 객체 , log : 메소드
    },
}


// .표기법

greetings.sayHello('Codeit');

// 대괄호 표기법
greetings['sayHello']('Codeit');


let rectAngle = {
    width: 30,
    height: 50,
    getArea: function() {
        return rectAngle.width * rectAngle.height;
    }
}

let triAngle = {
    width: 15,
    height: 40,
    getArea: function () {
        return triAngle.width * triAngle.height / 2;
    }
}