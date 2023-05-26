// 만약 promise 객체가 fullfilled 상태가 아닌 reject 상태가 됐을 때 실행하고 싶은 콜백이 있다면 어떻게 할까?
// then 메소드의 두 번째 파라미터로 원하는 콜백을 넣어주면 됩니다.
fetch('https://jsonplaceholder.typicode.com/users') 
 .then((response) => response.text(), (error) => { console.log(error);})// 첫 번째 콜백은 프로미스 객체가 fulfilled 상태가 될 때 실행되기 때문에 그 파라미터로 프로미스 객체에 작업 성공 결과가 넘어오지만
 .then((result) => {console.log(result); }); // 두 번째 콜백은 프로미스 객체가 rejected 상태가 될 때 실행되기 때문에 그 파라미터로 작업 실패 정보가 넘어온다.
