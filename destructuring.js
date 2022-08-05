/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
// The code below condenses the previous code down to a single line.
let [john, mary, joe] = ages;
console.log(john, mary, joe);


// Destructuring objects
let jobs = {
    mike: "developer",
    jill: "designer",
    alicia: "accountant",
};
// This assigns the variables below the jobs from above in that order.
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia)

// Destructuring subsets
// This assigns the second variable(s) the two first elements in the first array, in that order.
let languages = ['english', 'french', 'german', 'spanish', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

// The 2 commas before the two variables, below, skips the first 2 elements in the languages array, 
// and assigns the variables the following 2 elements in that array. (german, spanish)
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese',
};
// Code below picks out the 2 elements from the languages2 object.
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax

