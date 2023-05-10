// 요소 노드 주요 프로퍼티

const myTag = document.querySelector('#list-1');


// innerhtml

console.log(myTag.innerHTML);
// myTag.innerHTML += '<li>Exotic</li>';

// outerhtml

console.log(myTag.outerHTML);

//textContext
console.log(myTag.textContent);

myTag.textContent = '<li>new text</li>' // 특수문자도 텍스트로 출력한다.