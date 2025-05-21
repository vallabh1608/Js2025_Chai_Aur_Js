const greet = ()=>{
    return "hello"
}
console.log(greet());
const add = ( a, b)=>{
    console.log(a+b)     //need of use return during usage of {}
}
add(3,6);

const sub = (a,b)=>(a-b); //No need of use return at ()
console.log(sub(3,7));
