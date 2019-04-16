/*
var fruits = ['apple', 'banana', 'orange', 'pear', 'watermelon'];

var first = fruits[0];
var last = fruits[fruits.length - 1];
console.log(fruits);
// loop over an Array
fruits.forEach(function(item, index, array) {
  console.log(item, index);
});

//add to the end of the array
var addNew = fruits.push('guava');
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

//removing from the end of array
last = fruits.pop();
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

//remove from the front of array
first = fruits.shift();
console.log(fruits[0]);
console.log(fruits);

//add to the front of the array
addNew = fruits.unshift('apricot');
console.log(fruits[0]);
console.log(fruits);

//finding the index of an array item
var pos = fruits.indexOf('pear');

//remove an item by index position
var removeItem = fruits.splice(pos, 1);
console.log(fruits);
//remove items from an index position
var vegetables = ['cabbage', 'asparagus', 'radish', 'tomato', 'kohlrabi'];
console.log(vegetables);

var pos = 1, n = 2;

var removedItems = vegetables.splice(pos, n);
console.log(vegetables);
console.log(removedItems);

//copy an array
var shallowCopy = fruits.slice();

*/
// ~~
// ~~~~~~~
// ~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~
//start of new exercise set
console.log('~~~~~~~~~~~~');
console.log('This is the start of a new exercise set!')
console.log('~~~~~~~~~~~~');

var arr = ['first', 'second', 'third'];
console.log(arr[0]);


var promise = {
  'var' : 'text',
  'array' : [1, 2, 3, 4]
};
console.log(promise['var']);


// adding elements to an empty array
var classes = [];
classes.push('adv js', 'and studio', 'data structures');
console.log(classes);
Array.isArray(classes);
