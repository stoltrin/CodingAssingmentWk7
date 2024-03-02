let ages = [3,9,23,64,2,8,28,93,52]; //NOTE - I added 52 as the final number to ensure this worked programatically
let firstElement = ages[0];
let lastElement = ages[ages.length - 1];

let difference = (ages) => ages[ages.length - 1] - ages[0];
console.log(difference(ages)
);

for (let i = 0; i < ages.length; i++) {
    sum =+ [i];
}

let averageAge = (ages, sum) => ages.length / sum;
console.log(averageAge(ages, sum));

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0

for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
console.log(totalLetters)

let averageLettersPerName = totalLetters / names.length;

console.log(averageLettersPerName)

//NOTE - HOW DO YOU ACCESS THE LAST ELEMENT OF AN ARRAY?: You can access the last element of an array by using arrayName[arrayName.length -1]. -1 is the index number for the last element in an array.

//NOTE - HOW DO YOU ACCESS THE FIRST ELEMENT OF AN ARRAY?: You can access the first element of an array by using arrayName[0] because 0 is the index number for the first element in an array.

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

let repeatWord = (word, n) => word.repeat(n);

console.log(repeatWord('Hello ', 3));

const firstName = 'Trinity';
const lastName = 'Stolworthy';

let createFullName = (firstName, LastName) => `${firstName} ${LastName}`;
console.log(createFullName(firstName, lastName));

function generateRandomArray() {
    let auxArray = [];   
    let randomLength = Math.floor(Math.random()*100);
    for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
    return auxArray;
}
let myStupidArray = generateRandomArray();
console.log(myStupidArray);

console.log('random math', Math.random()*100)

function sumOfArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
   
    return sum > 100;
}
console.log(sumOfArray(myStupidArray)); //!SECTION END OF FIRST RANDOM GENERATED ARRAY

//!SECTION SECOND RANDOM GENERATED ARRAY
function generateRandomArrayTwo() {
    let auxArray = [];   
    let randomLength = Math.floor(Math.random()*100);
    for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
    return auxArray;
}
let myWeirdArray = generateRandomArrayTwo();
console.log(myWeirdArray);

function calculateAverage(array) {
    if (array.length === 0) {
        return 0; 
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    return sum / array.length;
}
console.log("Average:", calculateAverage(myWeirdArray));

//NOTE - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareAverageofArrays(array1, array2) {
    array1Average = calculateAverage(array1);
    array2Average = calculateAverage(array2);
    if(array1Average > array2Average) {
        return true;
    } else {
        return false;
    }
}

/* if(calculateAverage(myWeirdArray)> calculateAverage(myStupidArray)){
    console.log(true)
} else {
    console.log(false) 
} */

console.table(myWeirdArray)

//NOTE - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Write a function called willBuyDrink
// takes a boolean isHotOutside and a number moneyInPocket
function willBuyDrink (temp, money){
console.log('weird', temp, money)
// Return true ifHotOutside && if moneyInPocket is > 10
if (temp === true && money > 10.50){
    console.log('Will buy drink.');
} else {
    console.log('Will not buy drink.')
}
}
let isHotOutside = true;
let moneyInPocket = 10;
willBuyDrink(isHotOutside, moneyInPocket)