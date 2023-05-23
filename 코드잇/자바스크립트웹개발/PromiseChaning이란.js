console.log('Start!');
fetch('https://www.google.com') // Promise
  .then((response) => response.text())  // Promise ... Pending  
  .then((result) => { // 1. promise 객체를 리턴하는 경우 2. promise 객체가 아닌 값을 리턴하는 경우
    const users = JSON.parse(result); // 1.prmise 객체를 리턴할 때 then 메소드가 리턴했던 프로미스 객체는 콜백이 리턴한 프로미스 객체와 동일한 상태를 갖게 된다.
    return users[0];                  // 콜백이 리턴한 프로미스 객체가 fullfiled 상태가 되면 then 메소드가 리턴했던 프로미스 객체도 fullfiled 상태가 되고 동일한 작업상태가 되며,
                                      // 콜백이 리턴한 프로미스 객체가 rejected 상태가 되면 then 메소드가 리턴했던 프로미스 객체도 rejected 상태가 된다.
  })                                  // 2. primise 객체가 아닌 단순 숫자나 문자열, 일반 객체같은 것들을 리턴하게 되면
                                      // then 메소가 리턴했던 프로미스 객체는 fullfiled 상태가 되고 콜백의 리턴값을 작업 성공 결과로 갖게 된다.
  .then((address) => { // 이전 콜백의 리턴값을그대로 다음 콜백이 파라미터로 받아 사용된다.
    console.log(users); // 이렇게 프로미스 객체에 then 메소드를 연속적으로 부이는 것을 프로미스체이닝이라한다.
    const { address } = usres; // 프로미스체이닝은 프로미스객체들을 계속해서 연결해나간다는뜻이다.
    return address; // then 메소드는 새로운 프로미스객체를 리턴한다.
  })
  .then((geo) => { 
    console.log(address);
    const { geo } = address;
    return geo
  })

console.log('End'); 