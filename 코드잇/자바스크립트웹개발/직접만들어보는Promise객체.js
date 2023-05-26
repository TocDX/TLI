const p = new Promise((resolve, reject) => { // new Promise() 부분이 프로미스 객체를 생성하는 코드이다. new를 붙이면 자바스크립에서는 새로운 객채 생성
    setTimeout(() => {resolve('success');}, 2000);// (resolve, reject) 프로미스 객체가 생성될 때 자동으로 실행되는 함수이다. 이 함수는 executor함수라고 한다.
                                             // resolve 파라미터에는 생성될 프로미스 객체를 fulfilled 상태로 만들 수 있는 함수로 연결된다.
                                             // reject 파라미터에는 생성될 프로미스 객체를 rejected 상태로 만들 수 있는 함수로 연결된다.
});

p.then((result) => { console.log(result);});