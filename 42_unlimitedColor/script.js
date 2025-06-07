let hex = '0123456789ABCDEF'
let startbtn = document.querySelector('#start')
let stopbtn = document.querySelector('#stop')
let color;
let startInterval;

startbtn.addEventListener('click', () =>{
  if (!startInterval){

    startInterval = setInterval(()=>{
      color = '#';
      for(i=0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
      }
      console.log(color)
      document.body.style.backgroundColor = color; 
    }, 1000)
    
    return startInterval
  }
})

stopbtn.addEventListener('click', ()=>{
  clearInterval(startInterval)
  startInterval = null;
})
