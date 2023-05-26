async function fetchAndPrint(){  // await은 async안에서만 사용이 가능하다
    console.log(2);
    const response = await fetch('https:jsonplaceholder.typicode.com/users');
    const result = await response.text();
    console.log(7);
    console.log(result);
}

console.log(1);
fetchAndPrint();