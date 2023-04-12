// 배열 array

let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

console.log(typeof members);
console.log(members.length);
console.log(members['length']);
console.log(members.length - 1)
// 추가
members[5] = 'NiceCodeit'
console.log(members[5]);

// 삭제
delete members[4];
console.log(members)