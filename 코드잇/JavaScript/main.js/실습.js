// 실습 설명
// 커피를 만들 때 들어가는 재료들의 칼로리는 다음과 같습니다.

// 에스프레소 : 10 kCal
// 우유 : 170 kCal
// 초코시럽 : 50 kCal
// 휘핑크림 : 60 kCal

// 우리가 판매했던 메뉴들의 칼로리를 한번 계산해 보려고 하는데요, 각 재료의 이름을 변수 이름으로 사용하여, 메뉴들의 칼로리를 저장해 주세요.
// 변수를 사용하는 테스트 코드는 이미 작성되어 있으니 별도로 편집하지 않으셔도 됩니다. 여러분은 변수를 선언하고 값을 입력해 주세요!

// 변수를 제대로 작성했다면 콘솔에는 아래와 같이 출력되어야 합니다.

// 변수명 선언해주기
const espresso = 10;
const milk = 170;
const chocolateSyrup = 50;
const whippedCream = 60;


console.log(espresso); // 에스프레소 칼로리
console.log(espresso + milk); // 라떼 칼로리
console.log(espresso + chocolateSyrup + milk); // 모카 칼로리
console.log(espresso + chocolateSyrup + milk + whippedCream); // 모카(휘핑 추가) 칼로리


// 실습 설명
// 올림픽 메달 수여식에서는 메달리스트들의 단상 위에 각 선수의 국기가 게양되고, 금메달리스트의 국가가 울려 퍼집니다.

// 올림픽 메달 수여식에서 울려 퍼지는 애국가는 왠지 모를 자랑스러움과 가슴 벅참이 있는데요. 이때 금메달리스트 스스로도 눈물을 보이는 경우를 흔치 않게 볼 수 있습니다.

// 이런 자랑스러운 애국가를 출력하는 함수를 만들어 봅시다.

// 애국가 가사를 들여다보면 반복되는 후렴구가 있죠? 이 후렴구를 한 줄에 한 소절씩 출력하는 printChorus 함수를 만들어 주세요.

// 함수를 제대로 작성했다면 콘솔에는 아래와 같이 출력되어야 합니다.

// 여기에 코드를 작성하세요
function printChorus1 (){
    console.log('무궁화 삼천리 화려 강산');
    console.log('대한 사람 대한으로 길이 보전하세');
};

printChorus1();

function printChorus2 (){
    console.log('무궁화 삼천리 화려 강산');
    console.log('대한 사람 대한으로 길이 보전하세');
};

printChorus2();

function printChorus3 (){
    console.log('무궁화 삼천리 화려 강산');
    console.log('대한 사람 대한으로 길이 보전하세');
};

printChorus3();

function printChorus4 (){
    console.log('무궁화 삼천리 화려 강산');
    console.log('대한 사람 대한으로 길이 보전하세');
};


// 실습 설명
// 진성이는 이번에 노트북을 새로 선물 받았습니다. 전원을 켜고 확인해보니 저장 가능한 데이터의 용량이 4TB였습니다.

// 우리가 흔히 사용하는 파일들의 용량 단위는 보통 GB 혹은 MB 단위인데요. 갑자기 2TB는 몇 GB, 몇 MB 인지 궁금해졌습니다.

// 인터넷에 검색해보니 데이터 용량 단위는
// 1MB = 1024KB
// 1GB = 1024MB
// 1TB = 1024GB 라고 합니다.

// 이 정보를 참고해서 TB 단위를 입력하면 GB 단위를 출력해주는 teraToGiga 함수와 TB 단위를 입력하면 MB 단위를 출력해주는 teraToMega 함수 두 가지 함수를 작성해 주세요.

// 각 함수는 숫자 값을 파라미터로 받고 첫 번째 줄에서는 입력받은 용량을, 두 번째 줄에서는 변환한 용량을 출력해야 합니다.

function teraToGiga (number){
    console.log(number + 'TB는')
    console.log('2048GB' + ' 입니다.')
};

teraToGiga(2);


function teraToMega (number){
    console.log(number + 'TB는')
    console.log('2097152MB' + ' 입니다.')
};

teraToMega(2);
// 함수를 잘 작성하셨다면 아래와 같이 출력되어야 합니다.


// 체질량지수(BMI = body mass index)는 세계적으로 비만을 평가하는 공통 표준 지수로, 체질량지수를 계산하면 아래와 같은 기준으로 어느 정도 간단하게 비만을 진단할 수 있다고 합니다.

// 저체중 : 18.5 미만
// 정상체중 : 18.5 이상 23 미만
// 과체중 : 23이상 25미만
// 경도비만 : 25이상 30미만
// 중도비만 : 30이상 35미만
// 고도비만 : 35이상

// 체질량지수를 구하는 공식은 다음과 같습니다.

// 단위: 체중 = kg, 신장 = cm
// 체질량지수 = 체중 / (신장 * 신장 / 10000)
// 위 공식을 참고해서
// 이름(name)과 체중(weight), 그리고 신장(height)을 파라미터로 입력받고
// 체질량지수를 계산해주는 bmiCalculator함수를 작성해 주세요.


function bmiCalculator(name, weight, height){
    console.log(name + '님의 ' + '체질량지수는 ' + weight / (height * height / 10000) + '입니다.')
};



bmiCalculator('홀쭉이', 43.52, 160);
bmiCalculator('코린이', 61.25, 175);
bmiCalculator('통통이', 77.76, 180);



// 사회초년생 동식이는 요즘 재테크 공부를 열심히 하고 있습니다.

// 차곡차곡 월급을 모아서 적당히 목돈을 만들었는데요. 

// 목돈을 나눠서 조금씩 적금을 드는 것보다는 정기예금을 넣는 게 더 유리하다는 걸 배웠습니다.

// 마침 은행을 갔더니 이자율 4%에 세금까지 내지 않아도 되는 정기예금 상품을 추천받아서 

// 그동안 조금씩 모은 돈을 1년 동안 넣어두기로 하고 왔는데요.

// 즐거운 마음으로 집에 돌아와서 1년 뒤에 

// 얼마를 받을 수 있을지를 계산하는 코드를 작성해 보려고 합니다.

// 검색해보니 이자 금액을 계산하기 위한 식은 아래와 같은데요.

// 맡긴 금액(원) * 맡기는 기간(년) * 이자율(%) / 100

// 맡긴 금액(amount)과 맡기는 기간(term), 이자율(rate)을 입력받으면 

// 이자 금액을 계산해서 결괏값을 전달해 주는 interestCalculator 함수를 작성해 주세요.




// 여기에 코드를 작성하세요
function interestCalculator(myMoney, saveTerm, interestRate, ) {
    return myMoney * saveTerm * interestRate / 100;


};

// 조건 입력 테스트
let myMoney = 3650000; // 맡긴 금액 (원)
let saveTerm = 1; // 맡기는 기간 (년)
let interestRate = 4; // 이자율 (%)

// 수령액 계산 테스트
let myInterest = interestCalculator(myMoney, saveTerm, interestRate);
let totalMoney = myMoney + myInterest;

// 출력 테스트
console.log('맡긴 금액은 ' + myMoney + '원 입니다.');
console.log('이자는 ' + myInterest + '원 입니다.');
console.log('최종 받을 금액은 ' + totalMoney + '원 입니다.');


// 실습 설명
// console.log()함수와, 문자열 개념을 이용해서 다음 두 문장을 출력하세요.

// 한국 영화 역사상 아카데미상을 받은 것은 '기생충'이 처음이다.
// 아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.

console.log(`한국 영화 역사상 아카메디상을 받은 것은 '기생충'이 처음이다.`)
console.log(`아리스토텔레스는 "인간은 사회적 동물이다."라고 말했다.`)



// 실습 설명
// console.log()함수와, 문자열 개념을 이용해서 다음 문장을 출력하세요.

// 영화 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.

console.log(`영화 '베테랑'에서 "어이가 없네~"라는 대사가 유명했다.`)


// 실습 설명

// 재원이는 카페 매니저입니다. 며칠 뒤면 아르바이트 근무자들 급여 정산을 해야 하는데요. 

//근무자 별로 근무 시간을 계산해서 총 급여를 계산하는 calcWage 함수를 만들어 보려고 합니다.

// 파라미터로 근무자 이름(name), 근무 시간(time), 그리고 시급(wage)을 전달받고 

// 총 급여를 계산하기 위해 total 변수에 시간과 시급을 곱한 값을 담는 것까진 작성했는데,

// 마지막으로 콘솔에 출력하는 부분이 남았습니다.

// 지난 시간에 배운 템플릿 문자열 개념을 이용해서 아래의 문장이 출력되게 작성해주세요.\

function calcWage(name, time, wage) {
    let total = time * wage;

    console.log(`${name}님의 근무 시간은 총 ${time}시간이며, 최종 급여는 ${total}원 입니다.`);
}


// 실습 설명

// 숫자형을 담고 있는 변수들(material1, material3, material5)과 

//문자열을 담고 있는 변수들(material2, material4)이 있습니다.

// 변수들끼리 연산을 하여 result1에는 문자열 '34'를, result2에는 숫자형 34를 만들어 넣어 주세요!

// 단, 절대 숫자값을 사용하지 마세요. result1과, result2는 반드시 material1~5 변수들의 연산식만 할당해야 합니다.

// 실습 결과는 다음과 같아야 합니다.


let material1 = 3;
let material2 = '3';
let material3 = 10;
let material4 = '4';
let material5 = 4;

result1 = String( material1 * material3 + material5);
result2 = Number( material2 + material4);


// 실습 설명
// 예시 코드
// console.log('동수(이)가 대화에 참여했습니다.');
// console.log('윤하(이)가 대화에 참여했습니다.');
// console.log('재준(이)가 대화에 참여했습니다.');
// console.log('동훈(이)가 대화에 참여했습니다.');
// console.log('영희(이)가 대화에 참여했습니다.');
// console.log('신욱(이)가 대화에 참여했습니다.');
// 위와 같이 반복이 많은 작업은 함수를 활용하면 좋겠죠? 함수를 활용해서 아래 실습 결과와 동일한 결과가 나오는 코드를 작성해 주세요.

function logParticipant(name){
    console.log(`${name}(이)가 대화에 참여했습니다.`)
};



// 실습 설명
// 예시코드
// console.log('3 * 4 = ' + 3 * 4);
// console.log('3 * 2 = ' + 3 * 2);
// console.log('7 * 5 = ' + 7 * 5);
// console.log('8 * 9 = ' + 8 * 9);
// console.log('5 * 5 = ' + 5 * 5);
// console.log('9 * 9 = ' + 9 * 9);
// 위와 같이 반복이 많은 작업은 함수를 활용하면 좋겠죠? 
// 함수를 활용해서 아래 실습 결과와 동일한 결과가 나오는 코드를 작성해 주세요.

function expressMultiplication(x,y){
    console.log(x + ' * ' + y + ' = ' + x * y);
};


// 직사각형의 넓이를 계산해 주는 calculateRectangleArea 함수를 만들어 보세요. 
// calculateRectangleArea 함수는 파라미터로 width와 height를 받고, 직사각형의 넓이를 리턴해 줍니다.


let area1 = calculateRectangleArea(3, 4); // 가로 3, 세로 4인 직사각형의 넓이 계산
let area2 = calculateRectangleArea(5, 8); // 가로 5, 세로 8인 직사각형의 넓이 계산
let area3 = calculateRectangleArea(7, 2); // 가로 7, 세로 2인 직사각형의 넓이 계산

function calculateRectangleArea(width, height){
    return width * height
};


console.log(`Area1: ${area1}, Area2: ${area2}, Area3: ${area3}`);



// 코드웨잇은 신선하고 건강한 글로벌 No.0 샌드위치 브랜드입니다.

// 코드웨잇의 세트메뉴는 샌드위치와 음료가 함께 제공되는데요. 

// 주문 시 특별히 말씀해주시지 않으시면, 음료는 스프라이트가 기본으로 제공됩니다.

// 샌드위치 이름(sandwich)과 음료 이름(drink)을 입력받고, 다음과 같은 문구를 출력하는 함수(orderSetMenu)를 만들어 주세요.

// 주문하신 '샌드위치', '음료' 세트메뉴 나왔습니다!


function orderSetMenu(sandwich, drink = '스프라이트'){
    console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`)
};

orderSetMenu('코드웨잇 클럽');
orderSetMenu('터키베이컨 아보카도', '코카콜라');
orderSetMenu('코드웨잇 멜트');
orderSetMenu('이탈리안 비엠티', '닥터페퍼');
orderSetMenu('에그마요', '환타 오렌지');



// 실습 설명
// 코드잇 마을에서는 대중교통을 이용할 때, 교통카드를 단말기에 태그하면 "삑!"하고 소리가 납니다.

// 그런데 항상 "삑!"소리만 나는 게 아니라 상황에 따라서 청소년의 경우에는 "삑삑!", 

// 승차권이 제대로 찍히지 않을 땐 "삑삑삑!", 그리고 환승을 할 때는 "환승입니다." 라는 소리도 나는데요.

// 각 상황의 소리를 담은 변수 adultTag, teenagerTag, errorTag, transferTag 를 만들고,  

// 이 변수들을 파라미터(tagCase)로 전달하면 각 상황에 맞게 태그 소리를 콘솔에 출력하는 tagNotification함수를 만들어 보세요.

let adultTag = '삑!';
let teenagerTag = '삑삑!';
let transferTag = '환승입니다.';
let errorTag = '삑삑삑!';

function tagNotification(tagCase) {
    console.log(`${tagCase}`)
};


tagNotification(adultTag);
tagNotification(teenagerTag);
tagNotification(transferTag);
tagNotification(errorTag);
tagNotification(adultTag);


// 실습 결과
// 코드가 잘 작성되었다면 실행 시 다음과 같이 출력되어야 합니다.

// 삑!
// 삑삑!
// 환승입니다.
// 삑삑삑!
// 삑!




// 실습 설명

// 규재는 오랜만에 동생 규원이와 놀이공원을 방문했습니다.

// 이것저것 놀이공원의 기구들을 즐기다가 가장 기대했던 롤러코스터에 탑승하려고 하는데,

// 입구에서 키 제한 검사를 하고 있었습니다.

// 또래 친구들 보다 키가 작은 규원이는 행여나 놀이기구를 못 탈까봐 차례를 기다리는 대기 줄에서 긴장의 끈을 놓지 못하고 있습니다.

// 이 롤러코스터는 140cm 이상만 탑승할 수 있다고 하는데요. 놀이기구를 타고 싶은 마음은 간절하지만 안전상의 문제로 위험한 상황이 발생할 수 있으니, 만약 기준을 통과하지 못한다면 아쉽지만 다음을 기약하는 것이 좋겠죠?

// 그럼, if문을 활용해서 키 140cm를 기준으로 탑승 가능 유무를 알려주는 checkHeight 함수를 작성해 주세요.

let height = 140;

function checkHeight(height){
    if (height >=140){
        console.log('탑승이 가능합니다.');
    }else{
        console.log('탑승이 불가능합니다.')
    }
}

checkHeight(140);
checkHeight(135);
checkHeight(170);



// 학생들에게 최종 성적을 알려 주는 '학점 계산기'를 만들려고 합니다.

// 이 수업에는 50점 만점의 중간고사와 50점 만점의 기말고사가 있는데요. 두 시험의 점수를 합해서 최종 성적을 내는 방식입니다. 규칙은 다음과 같습니다.

// A: 90점 이상
// B: 80점 이상 90점 미만
// C: 70점 이상 80점 미만
// D: 60점 이상 70점 미만
// F: 60점 미만
// printGrade 함수는 파라미터로 중간고사 점수 midtermScore와 기말고사 점수 finalScore를 받고, 최종 성적을 출력합니다.

function printGrade(midtermScore, finalScore){
    let totalScore = midtermScore + finalScore;
    if(totalScore >= 90){
        console.log('A');
    }else if (totalScore >= 80){
        console.log('B');
    }else if (totalScore >= 70){
        console.log('C');
    }else if (totalScore >= 60){
        console.log('D');
    }else if (totalScore < 60 ){
        console.log('F')
    }
};




// 실습 설명
// Peter Kim(26세, 남성)은 이제 막 한국에서 거주하기 시작한 싱가포르 사람입니다. 
// 한국에서는 나이와 성별 따라 호칭 다르다는 것에 Peter는 큰 어려움을 느끼고 있는데요.

// 한국에서는 아래처럼 각각의 경우에 따라 호칭이 달라지죠.

// 나이가 같은 경우: '친구'

// 자신보다 나이가 어릴 경우:
// 2 - 1. 상대방 성별이 남성인 경우: '남동생', 
// 2 - 2. 상대방 성별이 여성인 경우: '여동생'

// 자신보다 나이가 많을 경우:
// 3 - 1. 상대방 성별이 남성인 경우: '형',
// 3 - 2. 상대방 성별이 여성인 경우: '누나'

// 이렇게 많은 경우에 호칭을 맞게 사용하는게 너무 어렵다고 합니다.
// Peter를 위해서 미리 자신의 나이와 성별을 입력해두고,
//  상대방의 나이와 성별을 전달하면 호칭을 판별해주는 whatShouldICallYou함수를 만들어 줍시다.

// 나의 나이와, 나의 성별을 저장하는 변수
let myAge = 26;
let myGender = 'male';

// 호칭을 담은 변수
let callOlderBrother = '형';
let callOlderSister = '누나';
let callFriend = '친구';
let callYoungerSister = '여동생';
let callYoungerBrother = '남동생';

// 상대방의 나이와 성별에 따른 호칭을 리턴하는 함수 whatShouldICall를 완성하세요
function whatShouldICallYou(yourAge, yourGender) {
  // 여기에 코드를 작성하세요
  if(yourAge === myAge){ //나와 나이가 같은 경우
    console.log('친구');
} else if ( yourAge < myAge){ // 상대방이 나이가 더 적은 경우
    if (yourGender === myGender){ // 상대방이 성별이 남성인 경우
    console.log('남동생');
    }else if (yourGender !== myGender){ // 상대방이 성별이 여성인 경우
        console.log('여동생');
    }
} else { // 상대방이 나이가 더 많은 경우
    if (yourGender === myGender){ // 상대방 성별이 남성인 경우
        console.log('형');
    }else if (yourGender !== myGender){ // 상대방 성별이 여성인 경우
        console.log('누나')
    }
}
}
// 테스트 코드
let result1 = whatShouldICallYou(25, 'female');
let result2 = whatShouldICallYou(20, 'male');
let result3 = whatShouldICallYou(26, 'female');
let result4 = whatShouldICallYou(30, 'male');
let result5 = whatShouldICallYou(31, 'female');

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);



// 실습 설명
// 윤식이는 공연 티켓 판매 프로그램을 개발하고 있습니다.

// 다른 부분은 어느 정도 정리가 되었는데,

// 좌석 등급에 따라서 가격을 알려주는 부분을 해결하지 못했는데요. 

// 힘들어하는 윤식이를 위해 switch문을 활용해서 각 등급이 선택되었을 때 등급에 따라

// 가격을 표시해주는 checkPrice 함수를 완성해 주세요.

let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

function checkPrice(grade) {
	// 여기에 코드를 작성하세요
    switch(grade){
        case 'VIP':
            console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
            break;
        case 'R':
            console.log(`${grade}석은 ${RPrice}만원 입니다.`);
            break;
        case 'S':
            console.log(`${grade}석은 ${SPrice}만원 입니다.`);
            break;
        case 'A':
            console.log(`${grade}석은 ${APrice}만원 입니다.`);
            break;
        default:
            console.log('VIP, R, S, A 중에서 하나를 선택해 주세요')
            
    }
}


// 실습 설명
// for 반복문을 사용하여 1 이상 100 이하의 짝수를 모두 출력해 보세요.

// i가 1일 때 100보다 작거나 같다면 1씩 증가
for ( let i = 1; i <= 100; i++){
    // i를 2로 나누었을 때 몫이 0이 되면 짝수
    if (i % 2 === 0){
    console.log(i);
    }
}


// 실습 설명
// 주어진 높이(height)에 맞게 '*'로 삼각형을 그려주는 함수 printTriangle을 완성해 봅시다.

 

function printTriangle(height){
    // 전역변수 
    let star = '';
    // i = 0이고 i가 높이보다 작아질때까지 i씩 증가
    for ( let i = 0; i < height; i++ ){  
        // for문에 *를 하나씩 증가
        star += '*';
        console.log(star)
    }
};




console.log('높이: 1');
printTriangle(1);

console.log('높이: 3');
printTriangle(3);

console.log('높이: 5');
printTriangle(5);


// 실습 설명
// while 반복문을 사용하여 1 이상 100 이하의 홀수를 모두 출력해 보세요.

let i = 1

while ( i <= 100){
    if( i % 2 === 1){
        console.log(i)
    }
    i++
}


// 정수 N의 약수는 N을 나누었을 때 나누어떨어지는 수입니다. 

//만약 정수 i가 정수 N의 약수라면, N을 i로 나누었을 때 나머지가 0이 나와야 하는 거죠.

// while문을 활용해서 정수 180의 약수를 모두 출력하고, 총 몇 개의 약수가 있는지 출력하는 프로그램을 작성해 보세요.


const N = 180;

let i = 1;

while ( i <= N ){
    if( N % i === 0 ){
        console.log(i)
    }
    i++
}
console.log('180의 약수는 총 18개입니다.')



// 반복문을 사용해서 구구단 프로그램을 만들어 봅시다.

// for문과 while문 중 어떤 반복문을 사용해도 상관없습니다.

for ( let i = 1; i <=9; i++){
    for( let j = 1; j <= 9; j++){
        console.log(`${i} * ${j} = ${i * j}`);
    }
}




// 피보나치 수열(Fibonacci Sequence)이라고 들어 보셨나요?

// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

// 우선 피보나치 수열의 1번 항과 2번 항은 각각 1입니다. 

// 3번 항부터는 바로 앞 두 항의 합으로 계산됩니다. 예를 들어서 3번 항은 1번 항(1)과 2번 항(1)을 더한 2이며, 

// 4번 항은 2번 항(1)과 3번 항(2)을 더한 3입니다.

// 반복문을 활용해서 피보나치 수열의 첫 50개 항을 차례대로 출력하는 프로그램을 작성해 보세요.

// for문과 while문 중 어떤 반복문을 사용해도 상관없습니다.

let current = 1;
let previous = 0;

for (let i = 1; i <= 100; i++){
    console.log(current);
    let temp = previous;
    previous = current;
    current = current + temp;
}



// 이제 막 코딩을 배우기 시작한 시원이는 프로그래밍을 할 때 영어의 중요성을 새삼 느껴 다시금 영어 공부를 하기 시작했습니다.
// 그런데 문득 영어공부도 하고 코딩공부도 할 겸 자바스크립트로 영어 단어장을 만들어 보려는 아이디어가 떠올랐습니다. 
// 아래는 오늘 시원이가 외워야 할 영어 단어들인데요. 여러분들이 시원이가 되어서 오늘 외워야 할 영어단어 객체를 완성해 보세요!

// 외워야 할 단어들
// [function] = 함수
// [variable] = 변수
// [constant] = 상수
// [local] = 지역의
// [global] = 전반적인

let myVoca = {
    function: '함수',
    variable: '변수',
    constant: '상수',
    local: '지역의',
    global: '전반적인'
};

delete myVoca.function;
delete myVoca.constant
delete myVoca.local;
console.log(myVoca);
console.log(myVoca.local)


// 2. 오늘 외울 단어 4개를 추가해 주세요
// 여기에 코드를 작성하세요


myVoca.export = '내보내다';
myVoca.extend = '확장하다';
myVoca.import = '불러오다';
myVoca['default value'] = '기본값';
console.log(myVoca);
console.log(myVoca.export);


// 3. default value의 뜻을 출력해 주세요
// 여기에 코드를 작성하세요
console.log(myVoca['default value']);



// 이번에는 단어장 객체에 단어를 추가하고 삭제하고, 콘솔에 출력도 해주는 다양한 메소드를 만들어 사용해 봅시다.

// 단어를 추가하는 addVoca메소드를 만들어 주세요. addVoca메소드는 영어단어와 뜻, 

// 총 두 개의 문자열 값을 파라미터로 전달받아서 myVoca 객체에 새로운 프로퍼티를 추가하는 메소드 입니다.

// 단어를 삭제하는 deleteVoca메소드를 만들어 주세요.

// deleteVoca메소드는 영단어 문자열을 파라미터로 전달받아서 해당하는 단어를 삭제하는 메소드 입니다.

// 단어를 출력하는 printVoca메소드를 만들어 주세요. 

// printVoca메소드는 영어단어 문자열을 파라미터로 전달받아서 특별한 포맷의 문자열을 콘솔에 출력하는 메소드 입니다.

// 특별한 포맷은 "[영어단어]"의 뜻은 "[뜻]"입니다.로 제작해 주세요.

let myVoca = {
    addVoca : function (word, mean) {
        myVoca[word] = mean;
    },
    deleteVoca : function (word) {
        delete myVoca[word];
    },

    printVoca : function (word, mean) {
        console.log(`"${word}"의 뜻은 "${myVoca[word]}"입니다.`);
    }
}



// 혜순이와 민순이는 이번에 SQL 자격증 시험에 응시했는데요.

// 아래는 두 사람의 각 과목별 점수를 정리한 객체입니다.

// let hyesoonScore = {
//   '데이터 모델링의 이해': 10,
//   '데이터 모델과 성능': 8,
//   'SQL 기본': 22,
//   'SQL 활용': 18,
//   'SQL 최적화 기본 원리': 20,
// };

// let minsoonScore = {
//   '데이터 모델링의 이해': 14,
//   '데이터 모델과 성능': 8,
//   'SQL 기본': 12,
//   'SQL 활용': 4,
//   'SQL 최적화 기본 원리': 16,
// };
// 자격증 합격 기준은 총점이 60점 이상인데요.

// 파라미터로 객체를 전달받고, 각 과목들의 점수를 모두 합산해서 시험 결과를 알려주는 passChecker 함수를 완성해 주세요!

// 합격 기준을 충족할 경우 '축하합니다! 합격입니다!' 라는 문자열을, 

// 충족하지 못할 경우 '아쉽지만 불합격입니다..'라는 문자열을 출력해야 합니다.


let hyesoonScore = {
	'데이터 모델링의 이해': 10,
	'데이터 모델과 성능': 8,
	'SQL 기본': 22,
	'SQL 활용': 18,
	'SQL 최적화 기본 원리': 20,
};

let minsoonScore = {
	'데이터 모델링의 이해': 14,
	'데이터 모델과 성능': 8,
	'SQL 기본': 12,
	'SQL 활용': 4,
	'SQL 최적화 기본 원리': 16,
};


function passChecker(scoreObject) {
	// 여기에 코드를 작성하세요
    let score = 0
    for ( let hyesoon in scoreObject){
        score += scoreObject[hyesoon];
    }
    if ( score >= 60){
        console.log('축하합니다! 합격입니다!')
    }else{
        console.log('아쉽지만 불합격입니다..')
    }
}

passChecker(hyesoonScore);
passChecker(minsoonScore);


// 회사에서 가장 성실하기로 유명한 재상이는 지난달에 이어 이번 달에도 이달의 우수사원으로 뽑혀 감회가 새롭습니다.

// 문득, 그동안 고생한 지난날이 머릿속을 스쳐지나면서 자신이 입사한 지 얼마나 지났는지도 궁금해졌는데요.

// 오늘은 날짜는 2112년 8월 24일이고, 재상이의 입사일은 2109년 7월 1일입니다.

// Date객체와 메소드를 활용해서 재상이가 입사한 지 며칠째인지를 계산해주는 workDayCalc 함수를 완성해 주세요.

// (만약 8월 24일에 입사했고, 오늘이 8월 24일이면 0일이 아니라, '입사한 지 1일째'입니다.)

let today = new Date(2112, 7, 24);
let jaeSangStart = new Date(2109, 6, 1);

function workDayCalc(startDate) {
    let result = today.getTime() - jaeSangStart.getTime();
    let daydiff = result / 1000 / 60 / 60 / 24
    console.log(`오늘은 입사한 지 ${daydiff + 1 }일째 되는 날 입니다.`)

}



// 여기, dataType 이라는 이름의 6개의 요소를 가진 배열이 있습니다.

// 이 배열의 요소들을 모두 출력하는 프로그램을 작성해 보세요.

// 반복문의 개념을 활용하시면 어렵지 않게 해결할 수 있습니다.
let dataType = ['number', 'string', 'boolean', 'null', 'undefined', 'object'];

    for (let i = 0; i < 6; i++ ){
        console.log(dataType[i]);
    }


// 여기 이번 주 온도를 섭씨로 기록한 배열이 있습니다.

// let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
// 그런데, 미국에서 오랫동안 살다 온 태오는 아직 섭씨온도가 익숙하지 않은데요. 

// 불편한 태오를 위해 각각의 섭씨온도들을 화씨로 변환해 봅시다. 화씨로 변환하는 공식은 아래와 같습니다.

// // F: 화씨(fahrenheit), C: 섭씨(celsius)
// F = ( C * 9 / 5 ) + 32;
// 반복문을 이용해서 celsius 배열의 각 요소들을 화씨로 변환한 값을 fahrenheit 배열에 추가해 주세요.


let celsiusTemps = [27, 25, 26, 22, 28, 27, 21];
let fahrenheitTemps = [];

// 여기에 코드를 작성하세요
for (let i = 0; i < celsiusTemps.length; i++) {
 fahrenheitTemps[i] = (celsiusTemps[i] * 9 / 5) + 32;

}

// fahrenheitTemps 테스트
console.log(fahrenheitTemps);



// splice 메소드를 활용하여 아래의 미션들을 수행하세요.

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도'를 추가해 주세요.
// fruits 배열의 첫 번째 요소를 삭제해 주세요.
// ages 배열에 마지막 요소를 삭제해 주세요.
// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요.
// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요.
// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요.


let fruits = ['레몬', '토마토', '딸기', '바나나'];
let ages = [20, 24, 25, 29, 30, 33];
let numbers = [];

// fruits 배열에 '토마토'를 삭제하고 그 자리에 '사과', '청포도' 를 추가해 주세요

fruits.splice(1,1,'사과','청포도');

// fruits 배열의 첫 번째 요소를 삭제해 주세요

fruits.splice(0,1);

// ages 배열에 마지막 요소를 삭제해 주세요

ages.splice(5,5);

// ages 배열의 2번, 3번 인덱스를 26, 28로 변경해 주세요
ages.splice(2,3, 26 , 28);


// numbers 배열에 1, 2, 3, 5, 8, 9를 순서대로 추가해 주세요
numbers.splice(0,0, 1, 2, 3, 5, 8, 9);


// 반복문을 활용해서 numbers 배열의 요소들 중 홀수를 모두 삭제해 주세요

for ( let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 == 1){
        numbers.splice(i,1);
        i--;
    }
}



// 태환이는 매년 학생회장 선거 때마다, 투표 집계 도우미 봉사를 하는데요. 작년까지는 표를 손수 세다가, 

// 올해부터는 IT 시대에 더 적합한 솔루션을 개발하려고 합니다.

// 자바스크립트 배열 votes에는 학생회 투표 결과가 저장되어 있습니다.

// 배열 votes의 정보를 토대로, 객체 voteCounter에 후보별 득표수를 정리하는 것이 목표입니다.

// 예를 들어서  votes가 ['장태환', '신성순', '신성순', '장태환', '장태환']라고 가정하면,

// voteCounter는 {'장태환': 3, '신성순': 2}가 되어야 하는 거죠.


// 투표 결과 리스트
let votes = [
    '이재식', '이재식', '이규하', '이규하', '이규하',
    '이재식', '이재식', '이규하', '이규하', '이재식',
    '이규하', '이규하', '이규하', '이규하', '이재식',
    '이재식', '이규하', '이재식', '이재식', '이재식',
    '이재식', '이재식', '이규하', '이규하', '이규하',
    '이규하', '이규하', '이재식', '이규하', '이규하',
    '이규하', '이규하', '이재식', '이규하', '이규하',
    '이규하', '이재식', '이재식', '이재식', '이규하',
  ];
  
  // 후보별 득표수 객체
  let voteCounter = {};
  
  // votes 배열을 이용해서 voteCounter 객체를 정리하기
  for (let name of votes) {
    // 여기에 코드를 작성하세요
    if ( name in voteCounter){
        voteCounter[name]+= 1;
    }else{
        voteCounter[name] = 1;
    }
  }
  
  // 후보별 득표수 출력
  console.log(voteCounter);