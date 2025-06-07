const user = {
    userName : "Vallabh",
    id : 34,
    signin : true,

    getUserDetails : function(){
        // console.log(`UserName : ${this.userName} , id : ${this.id}, Signed In : ${this.signin}`);
        console.log(this);
        
    }
};
console.log(user.getUserDetails());