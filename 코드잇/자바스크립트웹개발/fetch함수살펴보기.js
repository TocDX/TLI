// fetch 함수는 어떤 객체를 리턴하는데 이 객체의 then 메소드로, 
// '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있다.
// 이렇게 등록된 콜백들은 then 메소드로 등록한 순서대로 실행되고, 
// 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있다.
fetch('https://www.google.com')
    .then((response) => response.text()) //response가 오면 이 코드가 실행.
    .then((result) => {console.log(result);});
