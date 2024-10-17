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