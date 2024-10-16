//Maps and forOf loop

// syntax- 
// const map= new Map()
// map.set('IN', "India")
// for(const [key, value] of map){
//     console.log(key, '-', value);
    
// } The above for loop prints each key value pair seperately


// Objects are not iterable in forof loops. It can be iterated using forin loops


//for each function
// array.forEach(function(element, index, array) {
//     // Do something with element
// });
// It doesn't use the function name but if you want to call a named function then just write the function name instead of its definition
// For each function doesn't return any values but filter() does.

//Example:

// const myarr= [1,2,3,4,5,6,7,8,9]
// const r= myarr.filter((nums) => (nums>4))
// console.log(r);


//Chaining allows you to use map(), filter() together on a single object(array). i.e    arr.map().map().filter();

// const initial=0
// const myarr= [1, 2, 3]
// const re= myarr.reduce((acc, curr)=> {
//     console.log(`accumulator: ${acc} and currentVal: ${curr}`);    
//     return acc+curr}, initial)
// console.log(re);
