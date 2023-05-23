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


 console.log('Start!');
 fetch('https://www.google.com') 
  .then((response) => response.text())
  .then((result) => { 
    const users = JSON.parse(result); 
    const user= users[0];
    const { address } = user; 
    console.log(address)
    const { geo } = address;
    console.log(geo)
  });

console.log('End'); 