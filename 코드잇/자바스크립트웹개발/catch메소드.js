fetch('https://jsonplaceholder.typicode.com/users') // catch 메소드는 promise객체가 rejected 상태가 되면 실행할 콜백을 등록하는 메소드이다.
 .then((response) => response.text()) // catch 메소드는 then 메소드를 약간의 변형으로 만들어졌다.
 .catch((error) => { console.log(error); })
 .then((result) => {console.log(result); });