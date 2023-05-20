fetch('https://learn.codeit.kr/api/members')
    .then((response) => response.text())
    .then((result) => {console.log(result); });



// 특정 직원 찾기
fetch('https://learn.codeit.kr/api/members/3')
    .then((response) => response.text())
    .then((result) => {console.log(result); });

// 특정 직원 추가하기

const newMember = {
    name: 'Jerry1',
    email: 'jerry@codeitmail.kr',
    department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members',{
    method: 'POST',
    body: JSON.stringify(newMember), // 외부에 전송하고 싶다면 정반대인 stringfy 
})
    .then((response) => response.text())
    .then((result) => {console.log(result); });
