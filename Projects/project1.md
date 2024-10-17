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