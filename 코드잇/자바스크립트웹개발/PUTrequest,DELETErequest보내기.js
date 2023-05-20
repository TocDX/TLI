// 직원 수정하기

// const Member = {
//     name: 'Alice',
//     email: 'alice@codeitmail.kr',
//     department: 'marketing',
// };

// fetch('https://learn.codeit.kr/api/members/2',{
//     method: 'PUT',
//     body: JSON.stringify(Member), // 외부에 전송하고 싶다면 정반대인 stringfy 
// })
//     .then((response) => response.text())
//     .then((result) => {console.log(result); });


// 삭제하기

const Member = {
    name: 'Alice',
    email: 'alice@codeitmail.kr',
    department: 'marketing',
};

fetch('https://learn.codeit.kr/api/members/2',{
    method: 'DELETE', // DELETE 경우에는 BODY 프로퍼티가 필요없다
})
    .then((response) => response.text())
    .then((result) => {console.log(result); });