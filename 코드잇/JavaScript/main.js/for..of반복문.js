// for...of

// 단순for문으로도 배열을 다룰 수 있지만 for of 문을 작성하면 더 간결하게 사용이 가능하다.
let members = ['쿤갈레', 'Zerrard66', '우리생각해써', '흙토끼', 'End Miracle'];

for (let i = 0; i < members.length; i++){
    console.log(members[i]);
}


for (변수 of 배열){
    동작부분;
}

for (let element of members){
    console.log(element);
}

for (let index in members){
    console.log(members[index]);
}

// 배열에 for in문을 사용하게 될 시 배열에 메소드, length등 할당 될 가능성이 있기에 배열에는 사용하지 않는걸 권장.