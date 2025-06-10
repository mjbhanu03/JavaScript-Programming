new Promise((resolved, reject) =>{
  setTimeout(function(){
    resolved({name: 'Mange Jay', roll: 'MCA24A43'})
  }, 1000)
})
.then((data) => {
  console.log(data)
})