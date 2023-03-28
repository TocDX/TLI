function sayHello(name) {
    console.log(`안녕하세요 ${name}님!`);
};


sayHello('코드잇'); // 안녕하세요 코드잇님!
sayHello('좋아요'); // 안녕하세요 좋아요님!
sayHello('사랑해'); // 안녕하세요 사랑해님!
sayHello(); // undefined


let x; // undefined
console.log(x);// undefined
console.log(sayHello('코드잇최고')); // 안녕하세요 코드잇최고님!

// 옵셔널 파라미터 (함수를 호출할 때 파라미터 값을 미리 전달해주는것)
function introduce(name, age, nationality = '한국') { // 옵셔널파라미터가 중간에 가게되면 순서가 밀리게 된다.
    console.log(`제 이름은 ${name}입니다.`);
    console.log(`나이는 ${age}살 이고, `);
    console.log(`국적은 ${nationality}입니다.`);
};

introduce('코드잇', '미국'. 4); // 값을 모두 전달한 경우
console.log('');
introduce('코드잇', 4); //파라미터 값을 생략한 경우