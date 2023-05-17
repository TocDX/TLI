// Rest Parameter

// argument 객체는 유사배열 객체이기 때문에 배열에 메소드는 사용불가.
// 항상 함수로 호출할 때 전달한 argument 전체를 다루기 때문에 마지막 2개 혹은 3개를 묶어서 다루려면 인덱싱을 하여야한다.
// 그걸 해소하기 위해 Rest Parameter를 사용한다.

function printArguments(...args){
    for (const arg of args){
        console.log(args.splice(0,2));
        console.log(arguments.splice(0,2)); // 오류가 나온다.
        console.log(arg);
    }
    console.log('------------------')
}

printArguments('Young', 'Mark', 'Koby');
printArguments('Young', );
printArguments('Young', 'Mark');
printArguments('Young', 'Mark', 'Koby', 'noel');
