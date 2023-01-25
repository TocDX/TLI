const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function() {
    // Logic.. 
    searchInputEl.focus()
});



// searchinputel 부분에 focus가되면 두번째 함수가 작동이 된다
// focused를 추가하겠다
searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색'); //set 무엇인가를 지정 attribute html의 속성
});

// 포커스가 해제되면 focused를 해제
searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder',''); 
});


const badgeEl = document.querySelector('header .badges');
// window는 윈도우 객체(우리가 보는 화면 자체) 스크롤 이벤트를 추가해서 
// 화면이 스크롤되면 익명의 함수를 실행하겠다
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션); 애니메이션을 위한 요소, 지속시간, 옵션
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    } else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 300));