//Objects

//1. Whenever you try to create an object using a constructor then it is called as singleton object. Otherwise it is called as object literal. The main difference is in singleton
// only one instance is created no matter how many ever times you try to create a new instance whereas object literals have multiple instances.

//Syntax for object declaration:
// Object.create
//const obj= { key: value} //Key value pairs
// 2. Whenever you create a key value pair it can be accessed in two ways
//      -> using dot operator i.e obj_name.key_name
//      -> using square brackets i.e obj_name["key_name"]
// But if you have already written your key in double inverted commas then only 2nd method can be used to access the value of that key.
// If you want to use symbols as a key in your object then use sqaure brackets and then use it. i.e ["Symbol_name"]= value. This can only be done if the symbol is defined.
// 3. If you want to freeze your object then use Object.freeze(obj_name) method. This makes sure that whatever value you change in your object, it is not affected.

//Example:
// const person = {
//     name: "Alice",
// };
// person.greeting= function() {
//     return "Hello, my name is " + this.name;
// }

// // Without parentheses - Refers to the function object itself. It means that JS only shows the name of the function. It doesn't run it.
// console.log(person.greeting); 
// // Output: [Function: greet] (or a similar representation of the function definition)

// // With parentheses - Calls the function and gets the return value
// console.log(person.greeting()); 
// // Output: "Hello, my name is Alice"

//Object destructuring
// We don't want to call the properties using dot operator again and again, hence we use the concept of object destructuring
// Example
// const course = {
//     coursename: "JS",
//     courseid: 10
// }
// const {coursename: name} = course
// console.log(name);
// ***This is also used in ReactJS

