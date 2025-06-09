class user{
    constructor(userName){
        this.userName = userName;
    }
    myname(){
        console.log(`My name is ${this.userName}`);
    }
}
class Teacher extends user{
    constructor(userName, userMail, userAge){
        super(userName);
        this.userMail = userMail;
        this.userAge = userAge;
    }
    addNewCourse(){
        return `New course added by ${this.userName}`;
    }
}
const teacher1 = new Teacher('Shalini', 'shalini12gmail.com', 25);
console.log(teacher1);
console.log(teacher1.myname());
console.log(teacher1 instanceof Teacher); // true

