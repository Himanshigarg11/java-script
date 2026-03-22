// const promiseOne=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("promises started,async is completed")
//             resolve()
//         },1000)
 //now we have created promise ab isko consume bhi krna hoga 
// })

// promiseOne.then(function(){
//    console.log("completed")
// })


// promise is object so created with new keyword 
// promise ka andr callback function pass krte a 
// and usma parameters main resolve and reject dalte a
// iska andr hum koi async task ya db call krna ya crypto 
// or network task dal skte a 
// resolve is connected to .then 
// .then main bhi hum callback function hi pass krte 
// so jo bhi promise na kamm kra hai wo .then main return hoti a
// jesa hi resolve execute hoga at line 5 tabb it will connect to .then



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("resolved async 2")
// })



// const promiseTwo=new Promise(function(resolve,reject){
//      setTimeout(function(){
//          resolve({usernam:"chai",email:"chai@example.com"})
//      },1000)
// }).then(function(user){
//     // iska andr sari values return hoti a
//     console.log(user.email)
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//       let error=false
//       if(!error){
//         resolve({username:'himanshi',email:"himanshigarg1115@gmail.com"})
//       }
//       else{
//         reject("ERROR:something went wrong")
//       }
//     },1000)
// })
// promiseThree
// .then(function(user){
//    console.log(user);
//    return user.username
// })
// .then(function(username){
//     console.log(username); 
// })
// .catch(function(error){
//     console.log(error)
// }).finally(function(){
//     console.log("evrything is completed")
// })



// const promiseFour=new Promise(function(resolve,reject){
// setTimeout(function(){
//       let error=true
//       if(!error){
//         resolve({username:'himanshi',email:"himanshigarg1115@gmail.com"})
//       }
//       else{
//         reject("ERROR:something went wrong")
//       }
//     },1000)
// });

// async function consumeIt(){
//    try{
//      const response=await promiseFour
//     console.log(response);
//    }
//    catch(error){
//     console.log(error)
//    }
// }
// consumeIt()

// async function getAlluser(){
//     try{
// const response=await fetch('https://jsonplaceholder.typicode.com/users')
//        //console.log(response)
//    const data=await response.json()
    // fetch sa data string main ara hum isko json main convert kr rae 
//    console.log(data);
//     }
//     catch(error){
//         console.log("error: ", error)
//     }
// }
// getAlluser()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{return response.json()}) 
// // here we return so isko handle next .then krega
// .then((answer)=>{console.log(answer)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{console.log("everything is working properly")})

// fetch('https://api.github.com/users/himanshigarg11')
// .then((response)=>{return response.json()}) 
// // here we return so isko handle next .then krega
// .then((answer)=>{console.log(answer)})
// .catch((error)=>{console.log(error)})
// .finally(()=>{console.log("everything is working properly")})




