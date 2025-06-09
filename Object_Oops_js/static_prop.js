class user{
    constructor(userName){
        this.userName = userName;
    }
    logMe(){
        console.log(`My name is ${this.userName}`);
    }
    static createId(){
        return `ID created :- 123`;
    }
}
const varunika = new user('Varunika');
// console.log(varunika.createId());
console.log(varunika.logMe());
class Teacher extends user{
    constructor(userName, userMail, userAge){
        super(userName);
        this.userMail = userMail;
        this.userAge = userAge;
    }
}
console.log(Teacher.logMe()); 
