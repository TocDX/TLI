// 자바스크립트의 모든 것이 다 객체다.

let brandName= '코드잇'; 
let bornYear= 2017;
let isVeryNice= true;
let worstCourse= null;

let codeit ={ 
//     name    value 
    brandName:'코드잇',
    bornYear: 2017,
    isVeryNice: true,
    worstCourse: null
}


Property Name 주의 사항!

1. 첫 번째 글자는 반드시 문자, 밑줄(_), 달러 기호($) 중 하나로 시작!

2. 띄어쓰기 금지

3. 하이픈(-) 금지



객체에서 데이터 접근하기


let codeit ={ 
    //     name    value 
        brandName:'코드잇',
        'born Year': 2017,
        isVeryNice: true,
        worstCourse: null,
        bestCourse: {
            title: '자바스크립트 프로그래밍 기초',
            language: 'JavaScript'
        }
};

// 점 표기법 (objectName.propertyName)
console.log(codeit.bornYear);

// 대괄호 표기법 )objectName['propertyName']

console.log(codeit['born ' + ' Year']);

console.log(codeit.bestCourse['title']);

// 존재하지 않는 데이터에 접근하려한다면 undefined가 출력이 된다