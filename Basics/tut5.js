//Strings
//String interpolation(It is used as a placeholder for the strings)
// let Name="Karan"
// const Age=20
// console.log(`Hello my name is ${Name} and my age is ${Age}.`)
//Use dot operator if you want to use any built-in functions with the string Ex: Name.toUpperCase()
// .toFixed(x) is used to set precision values.(i.e number of digits after the decimal point)
// toPrecision(x) is used to set the number of digits to be displayed Ex: 123.45. If the precision is set to 3 then only 123 will be displayed
//.toLocaleString() and .toLocaleString('en-IN) is used to display the numbers in American and Indian format respectively.
//Math.random() generates a value between 0 and 1.



//Arrays
// 1. shift() is used to remove the first element in the array.
// 2. unshift(ele) is used to add an element at the first position of the array.
// 3. In JS, the array can be of multiple data types and it is resizable too. Push and Pop are the basic operations for insertion and deletion of the elements respectively.
// 4. join() converts the array to a string.
// 5. slice(beg,end) gets a copy of the original array and shows the elements from beg to end-1. Whereas, splice(beg,end) removes the elements of the array from the index 
// beg to end and returns the removed elements. 

// const arr1=[1,2,3,4]
// const arr2=[4,5,6,7]
// arr1.concat(arr2)
// console.log(arr1);
// The above method doesn't merge arr1 and arr2 because the concat method returns a new array and here it is not being assigned to any variable, so the JS just ignores that line
// and returns the original arr1 as concat method is immutable unless it is assigned to any variable

// Correct method
// const arr1=[1,2,3,4]
// const arr2=[4,5,6,7]
// const newarr=arr1.concat(arr2)
// console.log(newarr); // Here it creates a new array newarr and it contains the elements of both arr1 and arr2

//Spread operator is used to merge two or more arrays
// const arr1=[1,2,3,4]
// const arr2=[4,5,6,7]
// const newarr=[...arr1, ...arr2]
// console.log(newarr);
// .flat(Infinity) is another method to concat multidimensional arrays easily.
// To convert any datatype into an array we use Array.from() (for one element) and Array.of() for multiple elements.
// Exceptional case****
// console.log(Array.from({name: "Karan"})) //This will give an empty array as it doesn't know what type of array it should convert it to.