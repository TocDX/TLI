// while문 (while statement)
let j = 1;
while (조건부분){
    동작부분
}

while (i <= 10){
    console.log(1)
    i++;
}
let i = 30;
while (i % 7 !== 0){ // 반복문 밖에 전역변수로 조건을 평가하고 다루고 있다.
    i++;
}

console.log(i); // 반복문 밖에서 값을 출력한다. 