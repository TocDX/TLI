console.log(값) // 괄호안에 들어가는 값이 매개변수.


// 함수 선언
function 함수이름 ( 파라미터 ){
    console.log(파라미터);
};


// 함수호출
함수이름(값);


// 활용
function greeting (sentence){
    console.log('Hi');
    console.log('안녕');
    console.log('こんにちは');
    console.log('你好');
    console.log('Guten Tag');
    console.log('Bonjour');
    console.log('Buongiorno');
    console.log(sentence);
};

// 함수 호출
greeting('Hola')


function Welcome(name, death){
    console.log('안녕하세요 ' + name + '님!' + death);
};

Welcome('코드잇','죽음');



// 여러개의 파라미터

function 함수이름 ( 파라미터 ){
    console.log(파라미터, 파라미터);
};


// 함수호출
함수이름(값);

function printSum(num1, num2){
    console.log(num1 + num2);
};


printSum(10, 5);
printSum(123, 4);
printSum(56, 7890);


function introduce(name, birth, nationality, job){
   console.log('안녕하세요! 반갑습니다.') 
   console.log('제 이름은' + name + ' 입니다.');
   console.log('생년월일은 ' + birth + ' 이고,'); 
   console.log('국적은 ' + nationality + ' 입니다.'); 
   console.log('직업은 ' + job + ' 입니다.'); 
   console.log('잘 부탁드립니다!'); 
};

introduce('코드잇', '17.05.18', '한국', '프로그래밍 강사')