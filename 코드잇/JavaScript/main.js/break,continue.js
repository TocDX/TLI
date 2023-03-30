// break와 continue


let i = 1;

while ( i <= 10){
    console.log(i); // 1만 출력된다.
    i++;
    break;
}


let i = 1;

while ( i <= 10){
    console.log(i); // 1만 출력된다.
    if (i === 7){ // 조건문을 넣고 break를 넣으면 7까지 실행되고 멈춘다.
        break; 
    }
    i++;
    break;
}

// 위 while문을 for문으로 바꿨을 때
for (let i = 1; i <= 10; i++){
    console.log(i);
    if (i === 7){
        break
        console.log(i);
    }
}

// continue
for (let i = 1; i <= 10; i++){
    console.log(i);
    if (i === 7){
        
        continue
        console.log(i);
    }
}


while ( i <= 10){
    console.log(i); 
    if (i === 7){ 
        i++;
        continue
    }
    console.log(i)
}

