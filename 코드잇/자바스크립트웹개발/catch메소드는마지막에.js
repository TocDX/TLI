fetch('https://jsonplaceholder.typicode.com/users') 
 .then((response) => response.text()) 
 //.catch((error) => { console.log(error); }) 
 .then((result) => { // 이 순서로 사용하게 되면 then 메소드의 콜백에서 에러가 발생시키면 then 메소드가 리턴했던 프로미스 객체는 rejected가 된다.
    console.log(result); // 이렇게 rejected 상태의 프로미스만 남고 어떤 처리를 해주지 않으면 웹 브라우저는 에러로 인식한다.
    throw new Error('test')
 })
 .catch((error) => { console.log(error); }); // catch메소드를 가장 아래로 내리면 fetch메소드의 작업이 실패해서 발생한 에러, 인위적인 에러 둘다 대응이 가능하다.