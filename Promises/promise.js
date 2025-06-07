// const promise1 = new Promise(function(resolve, reject){
//     const state = true;
//     if(!state){
//          setTimeout(()=>{
//         console.log('Async Task Completed');
//         resolve();
//         },1000)
//     }else{
//         reject();
//     }
// })
// promise1.then(()=>{
//     console.log('Promise Consumed');
// }).catch()

// new Promise(function(resolve, reject){
//      const state = false;
//     if(!state){
//         setTimeout(()=>{
//         console.log('Async Task Completed');
//          resolve({userName:'vallabh', eMail : 'vallabhkumargarina16@gmail.com'});
//         },1000)
//     }else{
//         reject('Err!! Occured');
//     }
   
// }).then((user)=>{
//     console.log(user);
//     return user.userName;
// }).then((userName)=>{
//     console.log(userName)
// }).catch((errMsg)=>{
//     console.log(errMsg); 
// }).finally(()=>{
//     console.log("This Promise Either Resolved or Rejected I am Finnaly block I will definetly Execute");  
// })

// const promisetwo = new Promise(function(resolve, reject){
//      const state = false;
//     if(!state){
//         setTimeout(()=>{
//         console.log('Async Task Completed');
//          resolve({userName:'vallabh', eMail : 'vallabhkumargarina16@gmail.com'});
//         },1000)
//     }else{
//         reject('Err!! Occured');
//     }
// })
// async function consumePromiseTwo() {
//     try{
//         const response = await promisetwo;
//         console.log(response);

//     }catch(err){
//         console.log(err);
//     }  
// }
// consumePromiseTwo();

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log("E :", err);
//     }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})