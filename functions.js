/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//const { multiply } = require("lodash");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//two parameters, arr and str
//loop through animals array
//if animals[i] = str, then return 
//////////////////////////////////////////////////////////////////////
function search(animals, name) {
    console.log(animals);

    for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            console.log('*********');
            console.log(animals[i].name);
          return animals[i].name;
        } 
        
    }
   
    return null;
}



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(arr, str, replacement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === str) {
            arr[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name) {
    for (let i = 0; i < animals.length; i++) {
        if (animals[i]['name'] === name) {
            animals.splice(animals[i], 1);
        } 
    }
    return animals;
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal) {
    let nameProp = animal.name;
    let speciesProp = animal.species;

    if ((nameProp.length > 0) && (speciesProp.length > 0)) {
            let allAnimalNames = [];
            for (let i = 0; i < animals.length; i++) {
                allAnimalNames.push(animals[i].name)
            }
            if (!allAnimalNames.includes(nameProp)) {
              animals.push(animal)
            }
        } 
        return animals;
    }


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}