async function fetchAndPrint(){  // async 함수는 항상 프로미스 객체를 리턴한다.
    return 3; //async 함수가 붙어있는 fetchAndPrint 함수는 숫자 3을 작업 성공 결과로 가진 fullfilled 상태의 프로미스 객체를 리턴한다.
}
fetchAndPrint();