// Parameter


function greeting(name = 'Codeit'){
    console.log(`hi my name is ${name}!`);
}

//같은 함수라도 전달하는 값에 따라 달라진다.
// 파라미터와 잘 구분해야 할 용어는 argument이다.
// 함수를 호출 할 때 파라미터로 전달하는 인자이다.
greeting('javascript');
greeting('codeit');
greeting('world');

// 파라미터가 있는 함수를 호출 할 때 아무런 argument가 없다면 undefined가 동작이 된다.
// 대신 파라미터에 기본값을 설정해주면 그 값을 사용하게 된다.
greeting();



// 아래 함수가 동작하게 되면 인터레스트에 인자가 없기에 undefined가 동작 된다.
function greeting(name = 'Codeit'){
    console.log(`hi my name is ${name}!`);
    console.log(`I like ${interest}`);
}
greeting('javascript')