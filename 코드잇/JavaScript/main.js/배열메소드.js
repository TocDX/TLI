// 배열의 메소드 (Array's Method)

let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];


// 삭제
delete members[4];
console.log(members)


// splice(startIndex, deleteCount, item)

members.splice(1,1, 'NiceCodeit', 'HiCodeit');
console.log(members);

// 배열의 첫 요소를 삭제: shift()

members.shift();
console.log(members);

// 배열의 마지막 요소를 삭제: pop()

members.pop();
console.log(members);

// 배열의 첫 요소로 값 추가: unshift(value)

members.unshift('NiceCodeit');

// 배열의 마지막 요소로 값 추가: push(value)

members.push('HiCodeit');
console.log(members);