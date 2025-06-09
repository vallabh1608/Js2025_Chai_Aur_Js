// const user = {
//     userName : "Vallabh",
//     id : 34,
//     signin : true,

//     getUserDetails : function(){
//         // console.log(`UserName : ${this.userName} , id : ${this.id}, Signed In : ${this.signin}`);
//         console.log(this);
        
//     } 
// };
// console.log(user.getUserDetails());

function UserDetails(userName, id, signin) {
    this.userName = userName;
    this.id = id;
    this.signin = signin;
    this.greeting = function() {
        console.log(`Welcome ${this.userName}, your id is ${this.id} and signed in status is ${this.signin}`);
    }
}
const user1 =  new UserDetails("Vallabh", 34, true);
const user2 =  new UserDetails("Varnika", 24, false);
console.log(user1.greeting());
console.log(user1 instanceof UserDetails); // true
console.log(user2 instanceof Object); // true


console.log(user2.greeting());
