// HTML 요소(Element) 1개 검색/찾기
let boxEl = document.querySelector('.box'); //querySelector가 정의 되어있다. 선택자box

console.log(boxEl);

boxEl.addEventListener('click', function(){
    console.log('click!!');
    boxEl.classList.add('active');
    console.log(
        boxEl.classList.contains('active')
    );
    boxEl.classList.remove('active');
    console.log(
        boxEl.classList.contains('active')
    );
});

// HTML 요소(Element) 모두 검색/찾기
const boxEle = document.querySelectorAll('.box');

// 찾은 요소들 반복해서 함수 실행
// 익명 함수를 인수로 추가
boxEle.forEach(function(boxEls, index){
    boxEls.classList.add(`order-${index + 1 }`);
    console.log(index,boxEls)
});

const boxElq = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxElq.textContent); // Box

// Setter, 값을 지정하는 용도
boxElq.textContent = 'HELLOW';
console.log(boxElq.textContent)