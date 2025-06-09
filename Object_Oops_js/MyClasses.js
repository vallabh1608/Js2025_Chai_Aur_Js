// class user {
//     constructor(name, age, password) {
//         this.name = name;
//         this.age = age;
//         this.password = password;
//     }
//     encryptPassword() {
//         return `${this.password.split('').reverse().join('')}abc`;
//     }
//     changeUser(){
//         return `User ${this.name} is now ${this.name.toUpperCase()}.`;
//     }
// }
// const chai = new user('Chai', 25, '1234');
// console.log(chai.encryptPassword());
// console.log(chai.changeUser());

function createUser(name, age, password) {
    this.name = name;
    this.age = age;
    this.password = password;
}
createUser.prototype.encryptPassword = function() {
    return `${this.password.split('').reverse().join('')}xyz`;
}
createUser.prototype.changeUser = function() {
    return `User ${this.name} is now ${this.name.toLowerCase()}.`;
}
const chai = new createUser('Chai', 25, '1234');
console.log(chai.encryptPassword());
console.log(chai.changeUser());
console.log(chai);
