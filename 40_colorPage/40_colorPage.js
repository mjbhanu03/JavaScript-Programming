let buttons = document.getElementsByClassName('button')
let body = document.getElementsByTagName('body')[0]
let buttonArray = Array.from(buttons)
console.log(buttons)
console.log(buttonArray)
buttonArray.forEach((e) => {
  e.addEventListener('click', () => {
    console.log(e.id)
    body.style.backgroundColor = e.id
  })
})
