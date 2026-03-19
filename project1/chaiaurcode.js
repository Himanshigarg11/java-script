const body=document.querySelector('body')
const buttons=document.querySelectorAll('.button')
// const grey=document.querySelector('#grey')
// const white=document.querySelector('#white')
// const blue=document.querySelector('#blue')
// const yellow=document.querySelector('#yellow')
//for id we use # and for class we use .
console.log(buttons)
buttons.forEach(function (button){
   console.log(button)
   button.addEventListener('click',function(e){
      console.log(e)
      console.log(e.target)
      console.log(e.target.id)
      switch(e.target.id){
        case 'grey':
            body.style.backgroundColor=e.target.id
            break
        case 'white':
             body.style.backgroundColor=e.target.id
            break
        case 'blue':
             body.style.backgroundColor=e.target.id
            break
        case 'yellow':
            body.style.backgroundColor=e.target.id
            break
      }
   });
   // jo bhi yahan hoga main sunuga so we apply click event

});
