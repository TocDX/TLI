// arguments
// arguments객체는 배열과 비슷한 유사배열이다.

// arguments들을 유연하게 사용할 수 있다.
function printArguments(a, b, c){
    for (const arg of arguments){
        console.log(arg);
    }
    console.log('------------------')
}

printArguments('Young', 'Mark', 'Koby');
printArguments('Young', );
printArguments('Young', 'Mark');
printArguments('Young', 'Mark', 'Koby', 'noel');
