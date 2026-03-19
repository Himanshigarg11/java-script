const randomNumber=parseInt(Math.random()*100+1)
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const submit=document.querySelector('#subt')
const remaining=document.querySelector('.lastResult')
const lowHigh=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')
let prevGuess=[]
let numGuess=1
let playGame=true
 if(playGame){
    submit.addEventListener('click', function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value)
    validateGuess(guess)
    })
 }

function validateGame(guess){
    
}

function checkGuess(guess){
    
}

function displayGuess(guess){

}

function displayMessage(message){

}
function endGame(){

}

function newGame(){

}

// const rnum = parseInt(Math.random()*100+1);
// console.log(rnum);
// const btn = document.querySelector('form');
// const inp = document.querySelector('.guessField');
// const guess = document.querySelector('.guesses');
// const lorh = document.querySelector('.lowOrHi');
// const rest = document.querySelector('.lastResult');
// const res = document.querySelector('.resultParas');
// const p = document.createElement('p');

// const allGuess =[];


// btn.addEventListener('submit', (e)=>{
//     console.log("check");
//     e.preventDefault();
//     lorh.textContent = '';
//     let val= rest.innerText;
//     if(val==1){
//         displayMess(`You have ran out of guesses, Better luck next Time, The number was ${rnum}`);
//         endGame();
//     }
//     validGuess();
// })

// function validGuess(){
    
//     if(inp.value==''  || isNaN(inp.value) !(inp.value>=0 && inp.value<=100)){
//         console.log("dg");
//         displayMess("Enter a valid number");
//        // newGame();
//        return;
//     }
//     checkGuess();
// }

// function checkGuess(){
//     if(inp.value == rnum){
//         displayMess(Congratulations! Your guess ${rnum} is correct! );
//         endGame();
//     }
//     //allGuess.pus(parseInt(inp.value));
//     displayMess(Your guess ${inp.value} is wrong! Try again.);
//     displayGuess(parseInt(inp.value));
// }

// function displayMess(message){
//     //console.log(message);
//     lorh.textContent = message;
//     console.log(lorh.textContent);
// }

// function displayGuess(num){
//     guess.innerText += ${num} ,;
//     --rest.textContent;
// }

// function endGame(){
//     p.innerHTML =  Game Over <br><button type="button" class="newg">New Game</button>;
//     res.appendChild(p);
//     document.querySelector('.newg').addEventListener('click', () => {
//         newGame();
//     });
// }

// function newGame(){
//     inp.value='';  // i was makign amistake here, input fields take only .value so the code was not working
//     guess.innerText = ''; 
//     lorh.innerText= '';
//     rest.textContent = '10';
//     p.innerText='';
//     console.log("here : ", rest.textContent);
//     console.log("here : ", inp.textContent);
    
// }