// console.log('Start!');
// fetch('https://www.google.com') 
//   .then((response) => response.text())
//   .then((result) => { 
//     const users = JSON.parse(result); 
//     return users[0];                  
//   })
//   .then((address) => { 
//     console.log(users); 
//     const { address } = usres; 
//     return address; 
//   })
//   .then((geo) => { 
//     console.log(address);
//     const { geo } = address;
//     return geo
//   })

// console.log('End'); 

//  위 코드는 아래코드로 바꿀 수 있다.


//  console.log('Start!');
//  fetch('https://www.google.com') 
//   .then((response) => response.text())
//   .then((result) => { 
//     const users = JSON.parse(result); 
//     const user= users[0];
//     const { address } = user; 
//     console.log(address)
//     const { geo } = address;
//     console.log(geo)
//   });

// console.log('End'); 

// 또 이런 코드로 변경이 가능하다.
console.log('Start!');
fetch('https://jsonplaceholder.typicode.com/users') 
 .then((response) => response.text())
 .then((result) => {  // 2번째 then 메소드는 2번째 fetch함수의 프로미스 객체를 리턴하고 있다.
   const users = JSON.parse(result); 
   const { id }= users[0];
   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
 })
 .then((response) => response.text()) // 이 뒤부터는 두 번째 fetch함수의 프로미스 객체의 then이 연결된것이다.
 .then((posts) => { // 이런 성질을 이용하면 콜백 안에서 프로미스 객체를 리턴하는 경우에 콜백 안에 then 메소드를 쓸 필요가 없다.
  console.log(posts);
 });
console.log('End'); 