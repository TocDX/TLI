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

result1 = String( material1 * material3 + material5)
result2 = Number( material2 + material4)