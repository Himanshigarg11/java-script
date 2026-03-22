
// function multiply(num){
//      return num*5
// }
// multiply.power=2
// console.log(multiply(5))
// console.log(multiply.power)
// console.log(multiply.prototype)


// function createUser(username, score){
//     this.username=username
//     this.score=score
// }

// createUser.prototype.increment=function(){
//     this.score++
// }
// createUser.prototype.printME=function(){
//     console.log(`score is ${this.score}`)
// }
// const user1=new createUser("chai",25)
// const user2=new createUser("heyyy",18)


// user1.printME()


// const heror=['spider','thor']
// const heroPower={
//     thor: "hammer",
//     spiderman: "sling",
//     getSpiderPower: function(){
//         console.log(`spidy power is ${this.spiderman}`)
//     }

// }

// Object.prototype.hitesh=function(){
//     console.log('hitesh is present in all objects')
// }
// Array.prototype.himanshi=function(){
//     console.log('himanshi is present in all arrays')
// }
//  heroPower.hitesh()
//  heror.hitesh()

//  heror.himanshi()
// heroPower.himanshi()

let user1="chaiaurcode       "
let  user2="    himaaa    "
String.prototype.trueLength=function(){
    console.log(this)
    console.log(`true length is: ${this.trim().length}`)
}

user1.trueLength()
user2.trueLength()

