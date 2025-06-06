let randomNumber = Math.round(Math.random() * 100 + 1)
let guessedNumbers = []
let lastGuessedNumber = document.querySelector('.LastgueesedNumber')
let numberOfGuessRemaining = document.querySelector('.numberOfGuessRemaining')
let card = document.getElementsByClassName('card')[0]

let para = document.createElement('p')
card.appendChild(para)

let btnsubmit = document.querySelector('.sbmt')
let btnplayagain = document.querySelector('.playagain')

btnsubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let number = parseInt(document.querySelector('.num').value)
  para.textContent = guessedNumbers
  validate(number)
})
btnplayagain.addEventListener('click', (e) => {
  location.reload()
})
console.log(randomNumber)
function validate(number){
  if(isNaN(number) || number === 0 || number == null || number <= 0){
    alert('please enter validate number')
  } else if(numberOfGuessRemaining.innerHTML == 0){
    alert('Game Over! You Lose...')
    btnsubmit.style.display = 'none'
  }
  else{
    isWinner(number)
  }
}

function isWinner(number){
  if(number == randomNumber){
    alert('You Won');
    btnsubmit.style.display = 'none'
  } else {
    // alert('Wrong Guess')
    lastGuessedNumber.innerHTML = number
    guessedNumbers.push(number)
    numberOfGuessRemaining.innerHTML -= 1;
  }
}