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