// this 

// this는 일반적으로 사용되지는 않고 함수 내부에서 사용된다.
// 객체에 메소드를 만들 때 중요한 역할을 한다.


const user = {
    firstName: 'Tess',
    lasName: 'Jang',
    getFullName: function() {
        return `${this.firstName} ${this.lasName}`;
    },
};

console.log(user.getFullName());

function getFullName () {
        return `${user.firstName} ${user.lasName}`;
}

const user = {
    firstName: 'Tess',
    lasName: 'Jang',
    getFullName: getFullName,
};

const admin = {
    firstName: 'Tess',
    lasName: 'Jang',
    getFullName: getFullName,
}
console.log(user.getFullName());