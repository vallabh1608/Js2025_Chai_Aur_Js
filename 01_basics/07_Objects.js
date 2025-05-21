const mysym = Symbol("Key1"); 
const JsUser = {
    Name : "Hitesh",
    "fullName" : "Garini Hitesh",
    [mysym] : "key1",
    Age : 23,
    Salary : 500000,
    Email : "vallabhkumargarina16@gmail.com",
    isLoggedIn : true,
    lastLoginDays : ["Wednesday", "Thursaday"]
}
console.log(JsUser.Age);
console.log(JsUser[mysym]);
console.log(JsUser["fullName"]);

console.log(JsUser["Salary"]);
console.log(JsUser["lastLoginDays"]);
JsUser.Email = "vallabh@cognizant.com";
console.log(JsUser.Email);
Object.freeze(JsUser);
JsUser.Email = "vallabh123@cognizant.in";
console.log(JsUser.Email);

// JsUser.greeting = function(){
//     console.log(`Hello, ${this.Name}`);
// }
// console.log(JsUser.greeting());