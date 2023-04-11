// for .. in 
// 객체 안에 있는 property를 가지고 반복적인 동작들을 수행할 때 사용

for ( 변수 in 객체) {
    동작부분
}

let codeit ={ 
    //name   // value 
    brandName:'코드잇',
    'born Year': 2017,
    isVeryNice: true,
    worstCourse: null,
    bestCourse: {
        title: '자바스크립트 프로그래밍 기초',
        language: 'JavaScript'
    }
};

for (let key in codeit){
    console.log(key)
}