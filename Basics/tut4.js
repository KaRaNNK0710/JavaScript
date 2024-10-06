//Datatype conversion

/* 1. If a string is converted into number then its value will be NaN only if it contains some kind of character other than a number, otherwise the number itself will be the value.
   2. Its type is a Number but the value is NaN. But for undefined type the value will be 0.
   3. Whenever 1 or 0 is converted into boolean then it's either true or false. But if you convert an empty string into a boolean type it's value will be false otherwise it will be true. 
*/
// let num = "100" -> this is a string
//  let converted= Number(num) -> this is of type number
// let notanum= "123abc" -> this is a string
// let convertednum= Number(notanum) -> this is of type num but its value is NaN(Not a Number) 
// let st= "hi"
// let convertedstring= String(st)
// console.log(typeof convertedstring);
// console.log(convertedstring);

//If null is used with a comparison operator then it will be treated as a number but when used with an equality operator then it will be treated as null itself
// console.log(null==undefined); -> true
//console.log(null=="null"); ->false
//  '===' checks the datatype and the value of the two operands
// Return type of all non primitive datatype is object

// Memory types in JS
// 1. Stack(This is used for the primitive datatypes and a copy of their value is used in case of any operation)
// 2. Heap(This is used for non-primitive datatypes where a reference is created for any operation)