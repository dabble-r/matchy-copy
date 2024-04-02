/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structures.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
console.log(animal);
animal.species = 'dog';
animal['name'] = 'Papito';
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];

noises[0] = 'wuff';
noises.push('ruff');
noises.unshift('bark');
noises[noises.length] = 'howl';

console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises.push('whine');

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      There are two ways to access properties on objects. They are bracket notation and dot notation. Dot notation is preferred; however, properties with special characters or spaces must 
 *       use bracket notation.
 *
 * 2. What are the different ways of accessing elements on arrays?
 *    They are several different ways to access elements on arrays. The first way is to give the array name followed by the numbered index in brackets. 
 *    Methods that can access array elements are:
 *        array.at() will acess an element at given index
 *        array.filter() will create a copy of array with given elements that pass the test
 *        array.find() returns the first element that passes the test
 *        array.includes() returns boolean, true or false, if element exists
 *        array.some() returns boolean, true or false, if any element passes test of callback function
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
var cat = { species: 'cat', name: 'Tabby', noises: ['meow', 'purr', 'hiss']};
animals.push(cat);
var bird = { species: 'bird', name: 'Tweety', noises: ['tweet', 'chirp', 'sing']};
animals.push(bird);
console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];

function getRandom(animals) {
  let ranInd = Math.floor(Math.random() * animals.length);
  return ranInd;
}
console.log(friends);

friends.push(animals[getRandom(animals)]['name']);
animals[0]['friends'] = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}