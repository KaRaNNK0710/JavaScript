// Global and Local scopes 

// 1. let and const are bounded to the scope i.e they can't be used outside the scope in the program. But we can use var anywhere in the program. It is not scope bounded.
// 2. Global scope is different in Node JS and in the console.

// function one(){
//     const username="Karan"
//     function two(){
//         const website="Youtube"
//         console.log(username)
//     }
//     // console.log(website);
//     two()
// }
// one()

//Mini Hoisting

// There are two ways to declare a function

// 1st way
// function addone(num){
//     return num+1
// }
// addone(5)

// 2nd way
// const addTwo=function(num){
//     return num+2
// }
// addTwo(5)
//3rd way
// func_name: function(){
        //function definition
//  }

// 3. In the second method if we call the function before defining it, then it throws an error. That is, it doesn't support mini hoisting. Whereas the 1st method supports mini
// hoisting.

//Arrow function and THIS

// This refers to the current context of the key of an object 
// "this", if used in browser's console then window is the  global object
// Wheras, if "this" is used in node js then it will print an empty object
// console.log(this);
// console.log(global); //This will print the global object present in node js
// 4. We can't use "this" inside a function.

// function chai(){
//     let username="Karan"
//     console.log(this.username);
// }
// chai() //This will print undefined because it doesn't get attached to the global object and it is also declared inside the function which is not counted in the global object.
// Hence it will print undefined

// Arrow function syntax
// const fun_name= () => {} 
// const fun_name = (num1, num2) => (num1+num2) //This works only when the function is of one line. You need not mention the return statement explicitly.
// When we use curly braces then we need to use the return statement, but if we use () braces then we need not use return statement
