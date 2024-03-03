//NOTE - Arguemnts: Values that are passed into a funcation when it is called. They are used to initialize the parameters in a function.

//NOTE - Body: The part of a FUNCATION that contains code that is executed when the FUNCTION is called.

//NOTE - Function: a block of code that performs a specific task and can be called or invoked from other parts of the program.

//NOTE - function: The keyword used to define a FUNCTION in Javascript

//NOTE - Invoke: To call a Function and preform (execute) its code.

//NOTE - Parameters: Variables that are defined in the declaration of a FUNCTION and recieve values when the FUNCTION is called. These are also known as names that are list in (function definition).

//NOTE - return: a keywork used ina FUNCTION to provide (or return) a value and stop the FUNCTION execution.

//NOTE - Statement: A line of code that performs an action, such as an assignment, a loop, or a conditional.

//NOTE - Value: a data type that represents a single piece of information, such as a number, a string, or a boolean.

//NOTE - To CREATE a function in JS you need to use the function keyword (function), followed by whatever you are naming your function. Then you put your parenthesis () where you then add your parameters (parameter 1, parameter 2, ....).

//function driveMyCars ( parameter 1, parameter 2, ....){
    //function body denoted by curly braces
    // this is where you write the code that will be executed when you call the function later.
    //return returnValue; (used if you want the FUNCTION to return a value)
//}

// driveMyCars( argument 1, argument 2, ....); this statment calls the function

//function myCount() {
    // for (let i = 0; i < 10; i++){
        //console.log(i);
    //}
//}

//myCount
// int is to be representative for needs integer
// function multiplyByTwo(int1){
//     return int1 * 2;
// }
// console.log(multiplyByTwo(arg1));


// let a = input[0];

// function speakFriend( string){
//     if (string === 'Mellon'){
//         return 'Enter'
//     } else {
//         return 'Access Denied'
//     }
// }

// console.log(speakFriend(a));

// Write a Function named loopUntilX that takes one parameter.
// Within the Function, write a loop that iterates as many times as the passed in value stored in the variable x, starting at 0.
// Within the loop, print the number of iterations to the console
// Once the loop is done, return true.
// Note: The Function has already been invoked for you, using the given variable x as the argument (see the last line of code)

// function loopUntilX (x) {
//     for (let i = 0; i < x; i++){
//         console.log(i);
//     }
//     return 'true'
// }

//NOTE - return Math.PI * 2 * a; finds circumference in javascript

//NOTE - ARROW FUNCTIONS adds functionality of bind current scope to current function, and shrinks down your code.

// let createFullName = (firstName, lastName) => firstName + ' ' + lastName

//OR

// let createFullName = (firstName, LastName) =>  `${firstName} ${lastName}`;
// let someFunction = (a, b) => {
//     return result = '';
//     for (let i = 0; i < a.length; i++) {
//     result += a;
// } result: result;
//     };
//     console.log(someFunction)

// console.log(createFullName('Tom', 'Sawyer'));

// //Javascript is event driven
// //A promise is for sure something that will happen in the future. Promises can return other promises and make it look like it's in a linear fashion. Callbacks can end up being difficult to read because of the curly braces.
// function handleEvent(value) {
//     console.log(value);
// }

// function handleError(err) {
//     console.log(err);
// }

// doSomethingThatReturnsAPromise()
//     .then((value) => {
//         console.log(value);
//     }).catch((err) => {
//         console.error(err);
//     });

const eat = "pizza";
const drink = "coke";

let myName = "Trinity";
let friendName = "Aspen";

// Why use const instead of let? It will stay the same, and will not change

let sum = (a, b) => a + b;

//NOTE - Arrow Functions are much more concise and to the point. Below is an example of an arrow function with  a block body. The curly braces are used to include multiple statements and in this example return key word is obligatory.

let addToPrint = (num1) => {
    let sum = 0;
    for (let i = o; i < num1; i++) {
        sum =+ num1;
    }
    return sum;
};

console.log(addToPrint(4));