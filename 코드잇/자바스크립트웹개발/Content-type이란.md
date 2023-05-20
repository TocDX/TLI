
1. Content-Type 헤더

Content-Type 헤더는 현재 리퀘스트 또는 리스폰스의 바디에 들어 있는 데이터가 어떤 타입인지를 나타낸다.

사실 이때까지 우리는 리퀘스트 또는 리스폰스의 바디에 HTML, JavaScript 등의 코드 또는 JSON 데이터가 들어가는 경우만 봤다. 하지만 실무 개발에서는 리퀘스트 또는 리스폰스의 바디에 이것 말고도 정말 다양한 종류의 데이터들을 넣게 되는데 텍스트부터 시작해서 이미지, 영상까지 정말 많은 것들이 들어갈 수 있다. 바로 이런 데이터들의 타입 정보가 Content-Type 헤더에 담겨있는 거다.

Content-Type 헤더의 값은 '주 타입(main type)/서브 타입(sub type)'의 형식으로 나타나는데 우리가 흔히 만나게 될 Content-Type 헤더의 값으로는 다음과 같은 것들이 있다.

### 주 타입이 text인 경우(텍스트)

- 일반 텍스트 : text/plain
- CSS 코드 : text/css
- HTML 코드 : text/html
- JavaScript 코드 : text/javascript ...

### 주 타입이 image인 경우(이미지)
- image/bmp : bmp 이미지
- image/gif : gif 이미지
- image/png : png 이미지 ...

### 주 타입이 audio인 경우(오디오)
- audio/mp4 : mp4 오디오
- audio/ogg : ogg 오디오 ...

### 주 타입이 video인 경우(비디오)
- video/mp4 : mp4 비디오
- video/H264 : H264 비디오 ...

위 타입들에 속하지 않는 것들은, 보통 application이라고 하는 주 타입에 속하는데.

### 주 타입이 application인 경우
- application/json : JSON 데이터
- application/octet-stream : 확인되지 않은 바이너리 파일 ...

마지막으로 application/octet-stream이라고 하는 값도 보이는데 '확인되지 않은 바이너리 파일'이라는 게 뭘까? 일단 '바이너리 파일'이 뭔지를 알아야 할 것 같은데 컴퓨터에서는 모든 파일이 0과 1의 조합으로 이루어져 있다. 하지만 이때 그 0과 1의 조합이 우리가 읽을 수 있는 텍스트로 변환 가능한 경우도 있고, 그렇지 않은 경우도 있다. 그렇지 않은 경우의 예로는 이미지 파일이나 비디오 파일 등이 있다. 이렇게 텍스트 파일 이외의 파일들을 보통 바이너리 파일(binary file)이라고 하는데 이 바이너리 파일들 중에서도 특정 확장자(.png, .mp4 등)의 포맷에 해당하지 않는 데이터들을 보통 이렇게 application/octet-stream으로 나타낸다. 참고로 브라우저는 리스폰스의 Content-Type 헤더의 값으로 application/octet-stream이 쓰여 있으면 보통, 사용자에게 '다운로드 받으시겠습니까'와 같은 alert 창을 띄운다.

이렇게 리퀘스트 또는 리스폰스의 바디에는 JSON 말고도 아주 다양한 타입의 데이터들이 담길 수 있다.

그런데 Content-Type 헤더는 왜 필요한 걸까? Content-Type 헤더가 존재하면, 바디의 데이터를 직접 확인해서 그 타입을 추론하지 않아도 되기 때문이다. 예를 들어, 리퀘스트의 바디에 JSON 데이터를 담아 보낼 때 헤드에서 이 Content-Type의 값을 application/json으로 알맞게 설정하고 보낸다고 할 때 만약 이 Content-Type을 써주지 않으면 어떻게 될까? 서버에서 바디의 데이터가 어떤 타입인지를 확인하는 절차가 추가적으로 필요하게 된다. 불필요한 비용이 발생하게 되며 그리고 리스폰스의 경우에도 마찬가지이다. 웹 브라우저에서 리스폰스를 받았는데 Content-Type 헤더의 값이 없으면 이 데이터가 무슨 타입인지 별도로 확인하고, 처리해줘야 한다.

따라서 리퀘스트든, 리스폰스든 바디에 어떤 데이터가 존재하는 경우라면 이 Content-Type 헤더의 값을 적절하게 설정해주는 게 좋다.

### 2. Content-Type 설정해보기

이번에는 리퀘스트를 보낼 때 직접 Content-Type 헤더의 값을 설정해보자. 이전에 새로운 직원 정보를 추가하기 위해 썼던 코드를 재사용한다.
```js
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

fetch('http://learn.codeit.kr/api/members', {
  method: 'POST',
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });
이제 여기에 Content-Type 헤더도 설정해보겠습니다.

const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  headers: { // 추가된 부분
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```
지금 fetch 함수의 옵션 객체 안에 headers라는 프로퍼티를 만들어서 객체 하나를 설정하고 그 객체 안에 'Content-Type'이라는 프로퍼티를 설정했다. 프로퍼티의 값으로는, 리퀘스트의 바디에 담을 데이터가 JSON 데이터라는 뜻으로 application/json을 적었다.