# Projects related to DOM

## Project link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-znueqt?file=index.html)

# Solution code
## Project 1
``` Javascript
// console.log("karan")
const buttons = document.querySelectorAll('.button')
// console.log(buttons)
const body = document.querySelector('body')

buttons.forEach((button) => {
  console.log(button)
  button.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.target)
    switch(event.target.id){
      case "grey":
        body.style.backgroundColor = event.target.id
        break;
      case "white":
        body.style.backgroundColor = event.target.id
        break;
      case "blue":
        body.style.backgroundColor = event.target.id
        break;
      case "yellow":
          body.style.backgroundColor = event.target.id
          break;
      case "purple":
          body.style.backgroundColor = event.target.id
          break;
      default:
        console.log("Enter a valid colour")
        break;
    }
  })
})

``` 

## Project 2 Solution
``` javascript
const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  if(bmi<18.6){
        results.innerHTML=`<span>Under weigth :${bmi}</span>`;
        }else if(bmi>18.6 && bmi<24.9){
            results.textContent=`Normal Weight:${bmi}`;
        }else{
            results.textContent=`Over Weight : ${bmi}`
        }
});
```
## Project 3 Solution
``` javascript
const clock = document.querySelector('#clock')
// or document.getElementById('clock)


//If we want to display something continuously in intervals we use 
// setInterval()


setInterval(() => {
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```


## Project 4 Solution
``` javascript
let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')

const guessSlot = document.querySelector('.guesses')
const remainingGuess = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let pervGuess = []; //This is to show the user's previous guesses
let numGuess = 1; //This is to count how many times the user has guessed

let playGame = true; //This allows the user to play the game
// Once numGuess hits 10 then playGame becomes false and the game stops


if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    validateGuess(guess)
  })
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number!')
  }
  else if(guess<1){
    alert('Please enter a number greater than 1!')
  }
  else if(guess>100){
    alert('Please enter a number less than 100!')
  }
  else{
    pervGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess)
      displayMessage(`Game over, random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage(`The number you guessed is correct!`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is too low!`)

  }
  else if(guess > randomNumber){
    displayMessage(`Number is too high!`)

  }
}

function displayGuess(guess) {
  userInput.value = '' //This is done because once the user enters the guess, then they should be able to guess again
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id ="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}
function newGame(){
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random()*100+1);
    pervGuess = []
    numGuess =1
    guessSlot.innerHTML = ''
    remainingGuess.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true

  })
}
```
#Project 5
``` javascript
  const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID
const startChangingColor = function () {
  if(!intervalID){
    intervalID = setInterval(changeBgcolor, 1000)
  }
  function changeBgcolor(){
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID)
  intervalID=null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);



```
#Project 6
``` javascript
  const insert = document.getElementById('insert')
window.addEventListener('keydown', (e)=>{
  insert.innerHTML = `
    <div class='color'>
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div> 
  `
})



```