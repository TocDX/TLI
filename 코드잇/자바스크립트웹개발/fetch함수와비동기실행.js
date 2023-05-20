console.log('Start'); //  먼저 출력이 된다.

fetch('https://jsonplaceholder.typicode.com/users') // fetch 함수는 리퀘스트를 보내고 어떤 객체를 리턴한다. 그리고 그 객체의 then메소드로 콜백을 등록한다. 
    .then((response) => response.text()) // 콜백은 서버로부터 response를 받을 때 실행된다.
    .then((result) => { console.log(result); }); // 첫번째 콜백의 리턴값을 넘겨받는다.
    // 이 둘은 콜백을 단지 등록만 한다. 콜백을 바로 실행하는게 아니다.

console.log('End'); // 등록 후 바로 end가 출력이 된다.
// 그 후 서버로부터 요청을 받으면 then 메소드들이 마지막으로 출력이 된다.