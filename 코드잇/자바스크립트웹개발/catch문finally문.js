async function fetchAndPrint(){  // 프로미스 객체가 rejected 상태일 때는 어떻게 할까?
    try{
    const response = await fetch('https:jsonplaceholder.typicode.com123/users'); // promiseChaning은 catch메소드를 사용했지만 async/await 은 try/catch 구문을 사용한다
    const result = await response.text(); // try 블록 안에서 await이 앞에 붙어 있는 프로미스 객체들 중 rejected 상태가 되는것이 생기면
    console.log(result);                  // 그 순간 코드의 실행 흐름이 catch문으로 넘어오게된다
    }catch (error){ // error 파라미터로 에러가 넘어온다.
        console.log(error);
    }finally { 
        console.log('exit'); 
    }
}
fetchAndPrint();