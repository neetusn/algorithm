// ***** mutating ADD
// push, unshift
// since the array will be mutated, 
// use 'let' rather than 'const'
let mutatingAdd = ['a', 'b', 'c', 'd', 'e']; 

mutatingAdd.push('f'); // ['a', 'b', 'c', 'd', 'e', 'f']  
mutatingAdd.unshift('z'); // ['z', 'a', 'b', 'c', 'd', 'e' 'f']  
// ***** non-mutating ADD
// concat()
// since we will not be mutating, 
// use const
const arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = arr1.concat('f'); // ['a', 'b', 'c', 'd', 'e'. 'f']  
console.log(arr1); // ['a', 'b', 'c', 'd', 'e']  

// since we will not be mutating, 
// use const
const arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = [...arr1, 'f']; // ['a', 'b', 'c', 'd', 'e', 'f']  
const arr3 = ['z', ...arr1]; // ['z', 'a', 'b', 'c', 'd', 'e']  

// ****** REMOVE mutating
// pop(), shift(), splice()
// since the array will be mutated, 
// use 'let' rather than 'const'
let mutatingRemove = ['a', 'b', 'c', 'd', 'e'];  
mutatingRemove.pop(); // ['a', 'b', 'c', 'd']  
mutatingRemove.shift(); // ['b', 'c', 'd']  


let mutatingRemove = ['a', 'b', 'c', 'd', 'e'];

const returnedValue1 = mutatingRemove.pop();  
console.log(mutatingRemove); // ['a', 'b', 'c', 'd']  
console.log(returnedValue1); // 'e'

const returnedValue2 = mutatingRemove.shift();  
console.log(mutatingRemove); // ['b', 'c', 'd']  
console.log(returnedValue2); // 'a'  

let mutatingRemove = ['a', 'b', 'c', 'd', 'e'];  
mutatingRemove.splice(0, 2); // ['c', 'd', 'e']  


let mutatingRemove = ['a', 'b', 'c', 'd', 'e'];  
let returnedItems = mutatingRemove.splice(0, 2);  
console.log(mutatingRemove); // ['c', 'd', 'e']  
console.log(returnedItems) // ['a', 'b']  

// REMOVE non mutating
// slice(), filter()
// since we will not be mutating, 
// use const
const arr1 = ['a', 'b', 'c', 'd', 'e'];

const arr2 = arr1.filter(a => a !== 'e'); // ['a', 'b', 'c', 'd']  
// OR
const arr2 = arr1.filter(a => {  
  return a !== 'e';
}); // ['a', 'b', 'c', 'd']

// since we will not be mutating, 
// use const
const arr1 = ['a', 'b', 'c', 'd', 'e'];  
const arr2 = arr1.slice(1, 5) // ['b', 'c', 'd', 'e']  
const arr3 = arr1.slice(2) // ['c', 'd', 'e']  

// REPLACE MUTATING
// splice()
// since the array will be mutated, 
// use 'let' rather than 'const'
let mutatingReplace = ['a', 'b', 'c', 'd', 'e'];  
mutatingReplace.splice(2, 1, 30); // ['a', 'b', 30, 'd', 'e']  
// OR
mutatingReplace.splice(2, 1, 30, 31); // ['a', 'b', 30, 31, 'd', 'e']  

// REPLACE non mutating
// arr.map()

// since we will not be mutating, 
// use const
const arr1 = ['a', 'b', 'c', 'd', 'e']  
const arr2 = arr1.map(item => {  
  if(item === 'c') {
    item = 'CAT';
  }
  return item;
}); // ['a', 'b', 'CAT', 'd', 'e']

// transforming array
// since we will not be mutating, 
// use const
const origArr = ['a', 'b', 'c', 'd', 'e'];  
const transformedArr = origArr.map(n => n + 'Hi!'); // ['aHi!', 'bHi!', 'cHi!', 'dHi!', 'eHi!']  
// OR
const transformedArr = origArr.map(n => {  
  return n * 2;
})// ['aHi!', 'bHi!', 'cHi!', 'dHi!', 'eHi!']
console.log(origArr); // ['a', 'b', 'c', 'd', 'e']; // orignal array is intact  



// ***************************** OBJECTS

//******** add mutating obj
const person = { name: 'John Doe', email: 'john@doe.com' };
// Using dot notation
person.age = 27;
// Using array notation
person['nationality'] = 'Irish';

//******** add non mutating obj
const person = { name: 'John Doe', email: 'john@doe.com' };
const samePerson = Object.assign({}, person, {
  age: 27,
  nationality: 'Irish'
});

const person = { name: 'John Doe', email: 'john@doe.com' };
const samePerson = { ...person, age: 27, nationality: 'Irish' };

// ********* remove mutating obj
const person = { name: 'John Doe', email: 'john@doe.com', age: 27 };
// dot notation
delete person.age;
// array notation
delete person['age'];