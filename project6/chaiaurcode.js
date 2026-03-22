const start=document.querySelector('#start')
const stop=document.querySelector('#stop')
const body=document.querySelector('body')
let interval=null
function colorChange(){
const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
body.style.backgroundColor=randomColor
}

start.addEventListener('click',function(){
    if(interval===null){
        interval=setInterval(colorChange,1000)
        
    }
})
stop.addEventListener('click',function(){
    clearInterval(interval)
    interval=null
})
