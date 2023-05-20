console.log('Start!');
// fetch 함수는 promise를 리턴하고
fetch('https://www.google.com') // fetch 서버에 리퀘스트를 보내고 리스폰스를 받는 작업을 한다. 작업은 성공 or 실패가 될수도 있는데 이 작업의 결과가 fetch 함수가 리턴하는 promise에 저장된다.
   // .then은 promise의 객체이다.
  .then((response) => response.text()) 
  .then((result) => { console.log(result); });

console.log('End');

// promise :작업에 관한 '상태 정보'

// primise 객체는 3개를 가진다
// pending : 진행중, fulfilled : 성공, rejected : 실패