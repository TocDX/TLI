// 이벤트 위임
const list = document.querySelector('#list');

// for (let item of list.children){
//     item.addEventListener('click', function(e){
//     e.target.classList.toggle('done');
//     });
// }

// 이 for문을 사용하게 되면 추가된 아이템에 대해서는 동작을 하지 않아 이벤트 핸들러를 계속 추가해줘야 한다.

list.addEventListener('click', function(e){
    // 원하는 요소에서 동작을 이뤄지게 따로 처리해야한다.
    // if (e.target.tagName === 'Li')
    if(e.target.classList.contains('item')){
    e.target.classList.toggle('done');
    }
});


const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);


// 이벤트 버블링을 막게되면 새로생긴 추가된 아이템은 작동하지 않는다.
li.addEventListener('click', function(e) {
    e.stopPropagation();
  }); 
