fetch('https://www.google.com')
    .then((response) => response.text())
    .then((result) => {
        const users = JSON.parse(result);
        console.log(users.lenght); 
        users.foreach((user) => {
            console.log(user.name)
        });
    });
// String타입에 JSON은 JavaScript로 변환해줘야한다.
// parser메소드 기억하기.