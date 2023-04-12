// 배열의 메소드 (Array's Method)

let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];


// 삭제
delete members[4];
console.log(members)


// splice(startIndex, deleteCount, item)
members.splice(1,1, 'NiceCodeit', 'HiCodeit');
console.log(members);