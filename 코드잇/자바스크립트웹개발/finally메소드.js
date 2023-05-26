// 만약 어떤 작업이 성공하든 실패하든 상관없이 항상 실행하고 싶은 콜백이 있을 때는 finally 메소드를 사용하면 된다.
fetch('https://jsonplaceholder.typicode.com/users') 
 .then((response) => response.text()) 
 .then((result) => {console.log(result); })
 .catch((error) => { console.log(error); })
 .finally(()=> { console.log('exit')}); // catch 메소드보다 더 뒤에 사용한다. finally 메소드 안의 콜백은 그 전의 프로미스 객체가 어떤 상태이든 실행하게 된다.
                                        // 작업 상태에 대하여 필요가 없어 파라미터도 필요가 없다.
                                        // 자원을 정리하거나 로그를 남기거나 어떠한 경우든 항상 특정 변수의 값을 사용해야 할 때 finally 메소드는 사용되어야한다.