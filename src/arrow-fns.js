// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.
//
// Ex.:
//   giveMeTwo();
//   => 2
const giveMeTwo = () =>{
    let x = 2
    return(x)
}

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.
//
// Ex.:
//   addNums(1, 2);
//   => 3
const addNums = (x,y) => {
    return x + y
}

// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.
//
// Ex.:
//   max(1, 2);
//   => 2
const max = (x, y) => {
    if (x > y) {
        return x
    } else if (y > x) {
        return y
    }
}

// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
function evens(nums) {
    let evenNumbers = nums.filter(function(evenNums){
        return evenNums % 2 === 0
    });
    return evenNumbers
}

// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']
function createGreetings(names) {
    //create a new array of names
    //include the greeting
    const greetArr = names.map(function(name){
        return "Hello, "+ name + "!"
    })
    return greetArr
}


// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.
//
// Ex.:
//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']
function loudLongWords(words) {
    const newWords = words
    //filter out words that are greater than 4 letters
        .filter(function(word){
            return word.length > 4;
        })

        //create new array of the previous words turning them to uppercase
        .map(function(word) {
            return word.toUpperCase();
        })
        
    return newWords 
}

export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };
