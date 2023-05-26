```js
axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
  ```
이 코드는 axios 패키지에서 제공하는 axios 객체를 사용해서 GET 리퀘스트를 보내고 그 리스폰스를 받는 코드다. 
자세히 보면 지금 코드에서 axios.get이라고 쓰여 있는 부분만 fetch로 바꾸면 fetch 함수와 사용법이 비슷해보인다.

axios 객체에서 리퀘스트를 보내는 많은 메소드들이 fetch 함수처럼 Promise 객체를 리턴한다. 
그래서 fetch 함수의 사용법과 비슷한 점이 많다.

다만, axios 객체에는 fetch 함수에는 없는 다음과 같은 몇 가지 기능 및 장점들이 있다.

- 모든 리퀘스트, 리스폰스에 대한 공통 설정 및 공통된 전처리 함수 삽입 가능
- serialization, deserialization을 자동으로 수행
- 특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할지 설정 가능(request timeout)
- 업로드 시 진행 상태 정보를 얻을 수 있음
- 리퀘스트 취소 기능 지원
이 밖에도 다양한 장점들이 있지만 이 노트는 axios의 사용법 자체를 설명하는 노트는 아니기 때문에 생략하겠습니다. 

