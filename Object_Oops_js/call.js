function setUserName(userName) {
    this.userName = userName;
}
function createUser(userName, password, email) {
    setUserName.call( this, userName);
    this.password = password;
    this.email = email;
}
const chai = new createUser('Chai', '1234','chai123@gmail.com');
console.log(chai);