// css 선택자로 태그 선택하기
const myTag = document.querySelector('#myNumber');
console.log(myTag);

const myTag2 = document.getElementById('myNumber');
console.log(myTag2);

const myTag3 = document.querySelector('.color-btn'); // 가장 위에 있는 클래스를 선택한다.
console.log(myTag3);

const myTags1 = document.querySelectorAll('.color-btn'); // all을 활용하면 유사배열 출력이 가능하다.
console.log(myTags1);

const myTags2 = document.getElementsByClassName('color-btn'); // 유사배열 출력이 가능하다.
console.log(myTags2);