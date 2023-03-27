// 형 변환 (Type Conversion)


// String, Number, Boolean
console.log(Number('10') + Number('5'));
console.log(String(10) + String(5));

// 숫자 -> 문자
let x = '123';
console.log(x);
console.log(String(x));
console.log(typeof x);
console.log(typeof String(x));
console.log('');

// 불린 -> 문자

let y = true;
console.log(y);
console.log(Number(y));
console.log(typeof y);
console.log(typeof Number(y));
console.log('');

console.log('4' - true); 

//산술 연산(+, -, *, /, %, **)
console.log(4 + '2');
console.log(4 + 2 );
console.log(4 - true);
console.log(4 * false);
console.log(4 / '2');
console.log('4' ** true);
console.log(4 % 'two');

//관계 비교 연산(<, <=, >, >=)

console.log(2 < 3);
console.log(2 > true);
console.log('2' <= false);
console.log('two' >= 1);

// 같음 비교 연산 (===, !==, ==, !=)
console.log(1 === '1') // 일치, 불일치(!==)
console.log(1 === true);
console.log(1 == '1'); // 동등, 부등(!=)
console.log(1 == true);