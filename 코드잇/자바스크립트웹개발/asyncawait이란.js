async function fetchAndPrint(){ // async는 비동기를 의미한다. 함수안에 비동기적으로 실행될 부분이 있다는것을 의미한다.
    const response = await fetch('https:jsonplaceholder.typicode.com/users');
    const result = await response.text();
    console.log(result);
}

fetchAndPrint();