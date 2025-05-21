function one(){
    const name = "Vallabh";
    function two(){
        console.log(`Welcome to Two '${name}'`);
    }
    two()
}
one();
///** Immediately invoked function **/////
(function(){
   console.log("Hello Coder!");
})();
((a,b)=>console.log(a+b))(5,4);