// console.log("hello world");
// console.log("hello world again"); // printing to console in dev tools

// //access and retrieve js arrays
// //                  0.        1.        2.         3.           4.          5.         6
// var myArray = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// console.log(myArray) //prints the entire array
// //1. print item here
// let dayOfTheWeek = myArray[2]; //variable names should always be extremely specific. Name of variable strongly helps avoid mistakes even for senior developers.
// console.log(myArray[2]); //prints tuesday
// console.log(dayOfTheWeek);

// //2. change 'thursday's value here to null
// myArray[4] = null; // this will replace THURSDAY with NULL inside of the array
// console.log(myArray);

// //3. print the position of step 2

// //RETRIEVING ITEMS FROM ARRAY
// //NOTE -   0 1  2   3 4   5  6  7  8  9 10 11 12 13 14 15 16 17
// var arr = [4,5,734,43,45,100,4,56,23,67,23,58,45,3,100,4,56,23];

// //put in var
// //print first element of array
// let aux = arr[0]
// console.log(aux);
// // print on the console the 4 element of arr

// let aux = arr[3]
// console.log(aux);

// //!SECTION FUNCTION LENGTH
// //NOTE -       0.      1.         2.
// let cars = ['toyota', 'nissan', 'tesla'];

// //console.log position

// let arraySize = cars


//NOTE - THIS CREATES A RANDOM ARRAY WITH THIS FUNCTION
// function generateRandomArray()
// {
//     var auxArray = [];
//     var randomLength = Math.floor(Math.random()*100);
//     for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
//     return auxArray;
// }
// var myStupidArray = generateRandomArray();
// console.log(myStupidArray);


// let cars = ['toyota', 'nissan', 'tesla'];

// let theLastOne = cars[2]; //THESE OPTIONS ARE BAD
// let size = cars.length -1; //gives you the last position (2)
// console.log("size", size); //This will tell you how many cars you have, spits  out size 3 for cars array

// // console.log(myStupidArray);
// // let lastPosition = myStupidArray.length - 1;
// // console.log("length", myStupidArray.length[3]);

// var carArray = ['hyundai', 'nissan', 'ford', 'chevy'];

// carArray.push('toyota'); //NOTE - push adds element to the end of the array
// console.log(carArray); //NOTE - print array to console

// carArray.unshift('honda', 'suburban'); //NOTE - unshift() adds element to the beginning of the array this added honda and suburban to the beginning preceding hyundai.
// console.log(carArray);

// carArray.pop(); //NOTE - removes the last element from the array. This removed toyota from the push we did earlier.
// console.log(carArray);

// carArray.splice(1, 0, 'GMC', 'dodge'); //NOTE - This put GMC and DODGE in between elements 0 and element 1.
// console.log(carArray);

//NOTE - The first (number) argument is the (place) index where the new elements should be added. In this case, it is 1, which is the second elements (item) in the array. The second (number) argument is the number of elements that should be romoved. We used ZERO so no elements were removed. The remaining (items) arguments are elements (items) to be added to the array at INDEX 1 (the second argument) and the original argument at index 1 (suburban) is moved to index 3.

//NOTE - You can also use splice to remove elements from your array. For example:

// carArray.splice(2, 1);
// console.log(carArray); //output was ['honda', 'GMC', 'suburban', 'hyundai', 'nissan, 'ford', 'chevy']

//NOTE - ARRAY VOCABULARY
//NOTE - An array is a collection of elements/objects accessed through a single variable (description/container). The array object allows us to store and change multiple objects by using their index number.

//NOTE - concat(): is an array method that can combine multiple arrays and return a new Array that contains all of the elements from the original arrays that you combined. The original arrays are not combined.

//NOTE - Element: refers to a single item within the array ex: 'apple'

//NOTE - filter(): an array method that creates a copy of an Array with all the elements that qualify a test which is then used by a provided FUNCTION.

//NOTE - for loop: A for loop is a control flow statement in JAvascript that allows you to execute a block of code multiple times and is based on a specified condition. It is often used to iterate over the elements (objects) in an array.

//NOTE - for of loop: allows you to iterate over the values of an iterable object, such as an array

//NOTE - forEach() : A built-in Array method that allows you to loop through the elements of an Array and preform a provided Function ONCE for each element.

//NOTE - INDEX: a number value that is not negative that is otherwise known as a position within an array. Example: 0. 1. 2. 3.

//NOTE - length: an array property that returns the number of elements in the array

//NOTE - map(): An array method that creates a new Array with new elements that result from calling an already provided FUNCTION on every element in the original array.

//NOTE - reduce(): An array method that allows you to reduce an Array of values into a single value

//NOTE - reverse(): An array method that reverses the order of elements in an Array. It changes (modifies) the original Array and returns the Array where the last element is  now the first and what was the first element is now the last.

//NOTE - sort(): An array method that reorganizes the elements of an Array by ascending order based on their assigned Unicode numbers (or code points). The sorted array is then returned.

//example ARRAY OF NAMES WITH MAP
// MAP METHOD
// let names = ['sam', 'tom', 'derek', 'sally', 'nicholas'];
// let lengths = names.map(function(element) {
//     return element.length //this is the length of the element the function called
// });
// console.log(lengths); //We should see the length of the string

// // REDUCE METHOD could be used to find the average of all values, the sum of all values ect

// let sum = lengths. reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// })

// console.log(sum);

// // log out each element using a loop or FOR EACH method

// names.forEach(function(element) {
//     console.log(element);
// }) //each of the names becomes logged out in console

//filter allows you to invoke a function that contains a boolean value. This allows us to use a boolean expression to filter out things that don't follow boolean expression

// let evens = names.filter(function(element){
//     return element.length % 2 == 0
// })
// console.log(evens);

// //NOTE - SPLICE METHOD MOST COMMON USE first perameter location to start at, second is how many to remove use MDN Documentation to find js array methods

// let removedElement = names.splice(1, 1);
// console.log(removedElement);