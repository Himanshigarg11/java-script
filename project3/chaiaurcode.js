const clock=document.querySelector('#clock')


setInterval(function ok(){
  let date=new Date()
clock.innerHTML=(date.toLocaleTimeString());  
}, 1000)
