import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root')); // index.html파일이 열리고 실행되는데 리액트 코드들 중에서 가장 먼저 실행되는 파일.
root.render(
 <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



// jsx : 자바스크립트와 HTML을 섞어서 쓸 수 있는 자바스크립트의 확장된 문법이다.
//       HTML 문법을 완전히 그대로 사용할 수는 없다.
//       class를 사용해야 할 때는 calssName을 사용해야한다.
//       for 속성을 사용할 수 없으니 앞에 htmlFor라고 작성해야 한다.
//       onblur, onfocus, onmousedown 등은 2번째 단어부터 대문자로 작성을 해야한다. (camelCase)

// jsx문법으로  HTML태그를 작성해야 할 때 반드시 하나로 감싸진 태그를 사용해야한다 ex) <p></p> <h1></h1>  x  <div><p></p><h1></h1></div> 
// 만약 div 태그로 감싸고 싶지 않다면 프래그먼트를 사용해야한다. <Fragment></Fragment>
// 매번 프래그먼트 태그를 사용하기보다는 <>로 축약을 해서 사용한다.

// jsx에서 자바스크립트와 HTML을 동시에 사용해보기.
// product 변수에 값을 담아주고 {} 사이에 넣어서 사용한다.
// {} 안에는 표현식만 가능. if for문등 사용 x

// 컴포넌트에 속성을 지정하는것을 props라고 한다.
// 각가의 속성은 prop이라고 불린다.

//