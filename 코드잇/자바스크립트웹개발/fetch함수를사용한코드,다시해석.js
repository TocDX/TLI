console.log('Start!');
fetch('https://www.google.com') 
  .then((response) => response.text())  // callback을 등록하기 위해서 사용하는 then 메소드는 프로미스에 객체이다.
  .then((result) => { console.log(result); }); // then 메소드는 프로미스 객체가 pending 상태에서 fulfiled 상태가 된다.

console.log('End'); // 프로미스 객체가 fullfiled 상태가 될 때에는 fethc 함수가 리퀘스트를 보내고 리스폰스를 정상적으로 받았을 때 fullfiled 상태가 되는데
                    // 그 때 콜백이 실행이 된다.