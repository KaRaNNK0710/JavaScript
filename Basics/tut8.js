
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed right after it’s defined, without being explicitly called later. 
// It's commonly used to create a new scope and avoid polluting the global scope with variables.
// If you want to run two IIFE then don't forget to add " ; " after every function's definition

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values
// true, 1, "0", 'false', " ", [], {}, function(){}
// If you want to check if an array is empty or not, then use .length property to check
// Similarly for object use Object.keys(objName).length because this line prints the object as an array, hence we use the length function to check