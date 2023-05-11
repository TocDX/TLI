// 이벤트 등록하기
let btn = document.querySelector('#myBtn');

// btn.onclick = function(){
//     console.log('Hi Codeit');
// };


function event1() {
	console.log('Hi Codeit!');
}

function event2() {
	console.log('Hi again!');
}

// elem.addEventListener(event, handler)
btn.addEventListener('click', event1);
btn.addEventListener('click', event2);

// elem.removeEventListener(event, handler)
btn.removeEventListener('click', event2);