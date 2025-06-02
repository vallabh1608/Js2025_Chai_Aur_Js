let randomNum = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.getElementById('guessFeild');
const guesses = document.querySelector('.guesses');
const remainingRes = document.querySelector('.lastResult');
const LoworHigh = document.querySelector('.lowOrHigh');
const para = document.createElement('p');
const startOver = document.querySelector('.resultParas');

let prevRes = [];
let GuessCount = 1;
let playGame = true;
if(playGame){
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateNumber(guess);
    });
}
function validateNumber(guess){
    if(isNaN(guess)){
        alert('Enter Valid Number');
    }
    else if(guess < 1){
        alert('Enter Guess Greater than 0');
    }
    else if(guess > 100){
        alert('Enter Guess less than or equal to 100');
    }
    else{
        prevRes.push(guess);
        if(GuessCount === 11){
            displayGuess(guess);
            displayMessage(`Game Over! Random Number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess < randomNum){
        displayMessage("Your Guessed Number is Too Low");
    }
    else if(guess > randomNum){
        displayMessage("Your Guessed Number is Too High");
    }
    else{
        displayMessage("Your Guessed Number is Correct");
        endGame();
    }
}
function displayGuess(guess){
    userInput.value = '';
    guesses.innerHTML += `${guess}, `;
    GuessCount += 1;
    remainingRes.innerHTML = `${11-GuessCount}`;
}
function displayMessage(message){
    LoworHigh.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    para.classList.add('button');
    para.innerHTML = `<button id = "newGame">Start New Game</button>`;
    startOver.appendChild(para);
    playGame = false;
    newGame();
}
function newGame(){
    const newgamebtn = document.querySelector('#newGame');
    newgamebtn.addEventListener('click', (e)=>{
        randomNum = parseInt(Math.random() * 100 + 1);
        para.remove();
        prevRes = [];
        GuessCount = 1;
        guesses.innerHTML = '';
        remainingRes.innerHTML = `${11-GuessCount}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}
