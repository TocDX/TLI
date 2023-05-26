```js
const successCallback = function () { };
const errorCallback = function () { };

fetch('https://jsonplaceholder.typicode.com/users') // Promise-A
  .then(successCallback, errorCallback); // Promise-B
```
이때까지 배운 내용을 바탕으로 이 코드를 해석해보자. 일단, 이 코드에서

(1) fetch 메소드가 리턴하는 Promise 객체를 Promise-A 객체라고 하고, 
(2) then 메소드가 리턴하는 Promise 객체를 Promise-B 객체라고 해보자.

그리고 fetch 함수의 작업이 성공하는 경우와 실패하는 경우로 나누어서 생각해보자.

fetch 함수의 작업이 성공해서 Promise-A 객체가 fulfilled 상태가 된 경우 : then 메소드 안의 "첫 번째" 콜백인 successCallback이 실행된다.
fetch 함수의 작업이 실패해서 Promise-A 객체가 rejected 상태가 된 경우 : then 메소드 안의 "두 번째" 콜백인 errorCallback이 실행된다.
자, 여기서 중요한 점은 Promise-B는, 실행된 successCallback 또는 errorCallback에서 무엇을 리턴하느냐에 따라

그 상태(fulfilled or rejected)와
결과(작업 성공 결과 or 작업 실패 정보)가
결정된다는 점이다.

1. 실행된 콜백이 어떤 값을 리턴하는 경우
successCallback이 실행되든, errorCallback이 실행되든, 실행된 콜백에서 어떤 값을 리턴하는 경우에는 그 값의 종류에 따라

Promise 객체인 경우와
Promise 객체 이외의 경우,
이 2가지 경우로 다시 나눌 수 있다.

(1) Promise 객체를 리턴하는 경우
```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result) });
```
위 코드에서 (response) ⇒ response.json() 이 콜백은 Promise 객체를 리턴하는 코드다. response 객체의 json 메소드가 Promise 객체를 리턴한다.  이렇게 콜백에서 Promise 객체를 리턴하는 경우에는 그 콜백을 등록한 then 메소드가 리턴했던 Promise 객체가 콜백이 리턴한 Promise 객체의 상태와 결과를 똑같이 따라 갖게 된다. 즉, 위 코드의 첫 번째 then 메소드가 리턴했던 Promise 객체는, response 객체의 json 메소드가 리턴한 Promise 객체가 추후에 갖게 되는 상태와 결과를 그대로 따라서 갖게 된다는 뜻이다.

좀 더 편하게 기억하기 위해서는 그냥 콜백에서 리턴하는 Promise 객체를 then 메소드가 그대로 리턴한다고 생각하셔도 된다. 그럼 이제 그 다음부터는 콜백에서 리턴한 Promise 객체로부터 다시 Promise Chain이 쭉 이어져 나간다고 보면 되겠다.

(2) Promise 객체 이외의 값을 리턴하는 경우
콜백이 꼭 Promise 객체만을 리턴하는 것은 아니다. 단순한 숫자, 문자열, 일반 객체 등을 리턴할 수도 있는데 이런 경우에 then 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고 작업 성공 결과로 그 값을 갖게 된다.

// Internet Disconnected
```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => 'Try again!')
  .then((result) => { console.log(result) });
```
예를 들어, 지금 인터넷이 안 되는 상황에서 이 코드를 실행했다고 해보자. 그럼 fetch 함수의 작업이 실패해서 두 번째 콜백인 (error) ⇒ 'Try again! 이 실행된다? 두 번째 콜백은 'Try again!'이라는 문자열을 리턴하고 있는데 이렇게 하면 해당 콜백을 등록한 then 메소드가 리턴했던 Promise가 fulfilled 상태가 되고, 그 작업 성공 결과로 'Try again' 문자열을 갖게 됩된다.

2. 실행된 콜백이 아무 값도 리턴하지 않는 경우
// Internet Disconnected
```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json(), (error) => { alert('Try again!'); })
  .then((result) => { console.log(result) });
```
방금 전과 같은 상황에서 콜백이 무언가를 리턴하는 게 아니라 이 코드에서처럼 단순히 alert 함수만 실행하고 끝난다고 해보자. 그럼 결과적으로 이 콜백은 아무런 값도 리턴하지 않은 것과 같은데 자바스크립트에서는 함수가 아무것도 리턴하지 않으면 undefined를 리턴한 것으로 간주됩니다. 따라서 방금 전 1. (2) 규칙에 따라 then 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고, 그 작업 성공 결과로 undefined를 갖게 된다.

3. 실행된 콜백 내부에서 에러가 발생했을 때
콜백이 실행되다가 에러가 발생하는 경우가 있다. 예를 들어
```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { 
        ...
        add(1, 2); // ReferenceError 발생
        ... 
  });
```
이렇게 정의하지도 않은 함수를 콜백에서 사용해서 에러가 발생하거나
```js
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { 
        ...
        throw new Error('failed'); 
        ... 
  });
```
특정 경우에 인위적으로 throw 문을 써서 에러를 발생시키는 경우도 있다.

이렇게 콜백이 실행되다가 에러가 발생한다면, then 메소드가 리턴했던 Promise 객체는 어떻게 될까? 이 경우에는 Promise 객체가 rejected 상태가 되고, 작업 실패 정보로 해당 에러 객체를 갖게 된다. 잠깐 아래의 코드를 개발자 도구에서 실행해보자면
```js
const promise = fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => { throw new Error('test'); });
```
promise 를 입력하여 then 메소드가 리턴한 Promise 객체의 내부를 살펴보면 이렇게 나온다.

지금 [[PromiseState]]는 Promise 객체의 상태를, [[PromiseResult]]는 Promise 객체의 결과(작업 성공 결과 또는 작업 실패 정보)를 나타내는 내부 슬롯이다.(내부 슬롯이란 자바스크립트 실행 엔진에서 내부적으로 관리하는 속성이라고 생각하면 된다. )
자세히 보면 현재 Promise 객체가 rejected 상태이고, 발생한 Error 객체를 그 작업 실패 정보로 갖고 있다는 것을 알 수 있다. 이렇게 콜백 실행 중에 에러가 발생하면, then 메소드가 리턴한 Promise 객체는 rejected 상태가 되고, 그 작업 실패 정보로 해당 Error 객체를 갖게 된다.

4. 아무런 콜백도 실행되지 않을 때
// Internet Disconnected
```js
fetch('https://www.google.com') // Promise-1
  .then((response) => response.text()) // Promise-2
  .then((result) => { console.log(result) }, (error) => { alert(error) }); 
```
then 메소드의 아무런 콜백도 실행되지 않는 경우가 있다. 지금 인터넷을 끊고 나서 위 코드를 실행했다고 생각해보면 fetch 함수가 리턴한 Promise-1 객체는 rejected 상태가 되기 때문에, 첫 번째 then 메소드의 두 번재 콜백이 실행되어야 한다. 그런데 지금 두 번째 콜백이 없다. 이런 경우에는 아무런 콜백도 실행되지 않는데 이런 경우에 then 메소드가 리턴한 Promise-2 객체는 어떻게 될까? 이런 경우에 then 메소드가 리턴했던 Promise-2 객체는, 이전 Promise 객체와 동일한 상태와 결과를 갖게 된다. 그러니까 지금 Promise-2 객체는 Promise-1 객체처럼 rejected 상태가 되고, 똑같은 작업 실패 정보를 갖게 된다.

그럼 rejected 상태가 된 Promise-2의 then 메소드에는 이제 두 번째 콜백이 존재하기 때문에 그 두 번째 콜백이 실행된다. 이렇게 아무런 콜백도 실행되지 않는 경우에는 그 이전 Promise 객체의 상태와 결과가 그대로 이어진다.
