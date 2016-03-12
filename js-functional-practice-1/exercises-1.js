

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
 
    for (var i=0; i < array.length; i++) {
        callback(array[i]);
    }

}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
//console.log(total === 24);
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
    // .. do something with each element of args
    // YOUR CODE HERE
    for (var i=0; i < args.length; i++) {
       
        total+=(args[i]);
        console.log(args);
        console.log(total);
    }
    return total;
}
console.log(sum());
console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
    // .. do something with each element of args
    // YOUR CODE HERE
    for (var i=0; i < args.length; i++) {
   
    var ans = (total+=(args[i]))/args.length;
    console.log(args);
    console.log(total);
    }
    return ans;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var base = 0;
    // .. do something with each element of args
    // YOUR CODE HERE
    for (var i=0; i < args.length; i++) 
        if (args[i] > base) {
            base = args[i];  
    }
    console.log(base);
    return(base);
}


console.assert( largest(2, 8, 6, 4) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var base = 0;

    // .. do something with each element of args
    // YOUR CODE HERE
    for (var i=0; i < args.length; i++) {
        if (args[i].length > base) {
            base = args[i].length;
            var newLongest = args[i];
            console.log(args);
        }
    }
    return(newLongest);
}

console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
console.log(soda.sort());
console.assert( soda.sort()[0] === "7-Up");

// .concat()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
var tea = ["Black", "Earl Grey", "Iced"];
var drinks = tea.concat(soda);
console.assert(drinks[5] === "Coke");

// .indexOf()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
console.assert(soda.indexOf("Fanta") === 4);

// .split()
var drinks = 'I like tea and soda in my mouth when I have thirst.'
var drinksArray = drinks.split(' ');
console.log(drinksArray);
console.assert(drinksArray[7] === 'mouth');

// .join()
var manyWords = ['All', 'these', 'words', 'are', 'one.'];
console.log(manyWords.join(''));
console.assert(manyWords.join('') === 'Allthesewordsareone.');

// .pop()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
console.assert(soda.pop() === "Fanta");

// .push()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
console.assert(soda.push("Mountain Dew", "Pepsi") === 7);

// .slice()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
var someSodas = soda.slice(0, 3)
console.assert(someSodas[2] === "Coke");

// .splice()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
soda.splice(1, 3, "Mountain Dew", "Pepsi");
console.log(soda[3]);
console.assert(soda[3] === "Fanta");

// .shift()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
console.assert(soda.shift() === 'Dr. Pepper');

// .unshift()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
console.assert(soda.unshift('Mountain Dew', 'Pepsi') === 7);
// .filter()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
function quitSprite(drink) {
    return drink !== "Sprite";
}
console.assert(soda.filter(quitSprite)[2] === "7-Up");

// .map()
var soda = ["Dr. Pepper", "Sprite", "Coke", "7-Up", "Fanta"];
function tryIt(drink) {
    return 'Sip on a ' + drink;
}
console.assert(soda.map(tryIt)[2] === 'Sip on a Coke');




