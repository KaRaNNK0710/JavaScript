//Types of Variables

const accid=2344 //once a variable is declared using const then it can't be changed
let emailid="karan@gmail.com" // most preferred to use if const is not used
var pass="2344123" // not recommended to use 
city="Belagavi"
//accid=123 -> not allowed
console.log(accid);
let accstate;
console.table([emailid, pass, city, accstate])
let z
/*  1. If a variable is just declared but not initialized then its value stored inside it is undefined
    2. If you assign value to a variable without declaring it using the above keywords, the variable is treated as a global variable by default(window object).
    3. However, in strict mode("use strict";) this will cause an error because strict mode doesn't allow implicit gloabal variables
    4. We cannot just declare a variable without using let, const and var.
*/