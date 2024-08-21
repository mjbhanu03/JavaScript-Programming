const hangmanImage = document.querySelector('.hangman-box img')
const wordDisplay = document.querySelector('.word-display')
const keyboardDiv = document.querySelector('.keyboard')
const guessesText = document.querySelector('.guesses-text b')
const gameModel = document.querySelector('.game-model')
const playAgainBtn = document.querySelector('.play-again')

let currentWord, correctLetters = [], wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
    correctLetters = []
    wrongGuessCount = 0;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`
    keyboardDiv.querySelectorAll('button').forEach(btn => btn.disabled = false)
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join('')
    gameModel.classList.remove('show')
}

const getRandomWord = () => {
    // selecting a random word and hint from the wordList
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    document.querySelector('.hint-text b').innerText = hint; 
    resetGame()
    wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
}

const gameOver = (isVictory) =>
{
    setTimeout(() =>{
        const modelText = isVictory ? `You found the word:` : `The correct word was:`;
        gameModel.querySelector('h4').innerText = `${isVictory ? 'Congrats!' : 'Game Over!'}`
        gameModel.querySelector('img').src = `./images/${isVictory ? 'victory' : 'lost'}.gif`
        gameModel.querySelector('p').innerHTML = `${modelText} <b>${currentWord}</b>`
        gameModel.classList.add('show')
    },300)
}

const initGame = (button, clickedLetter) => 
{
    // checking if clickedLetter is exist on the current Word
    if(currentWord.includes(clickedLetter))
    {
        [...currentWord].forEach((letter, index)  => {
            if(letter === clickedLetter)
            {
                correctLetters.push(letter)
                wordDisplay.querySelectorAll('li')[index].innerText = letter;
                wordDisplay.querySelectorAll('li')[index].classList.add('guessed');
            }
        })
            
    }
    else
    {
        wrongGuessCount++;
        hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`
    }
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`
    button.disabled = true;

    if(wrongGuessCount === maxGuesses) return gameOver(false)
    if(correctLetters.length === currentWord.length) return gameOver(true)
}

// creating keyboard buttons
for(let i = 97; i < 123; i++)
{
    const button = document.createElement('button')
    button.innerText = String.fromCharCode(i)
    keyboardDiv.appendChild(button)
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)))
}

getRandomWord()
playAgainBtn.addEventListener('click', getRandomWord)