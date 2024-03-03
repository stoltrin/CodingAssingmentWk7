// i is short for index
//initial expression. condition is i= 0 which will allow loop to run if it is true. I is incremented by 1, evaluated 5 times
for (let i = 0; i = 5; i++){
    //statement
    console.log('hello world');
}

// i < 5 is the condition
// let i = 0 means that it will check value from 0 onward
//i++ means it will increment by one

//NOTE - TEMPLATE LITERALS-  declared justlike strings, but instead of using single or double quotes, we wrap our text in back ticks. `` Template literals allow another way to create multi line strings without concatenation. EXAMPLE:

let firstName = 'Mickey';
let lastName = 'Mouse';
let street = '1 Main St.';
let city = 'Disneyland';
let state = 'CA';

console.log(
    `${firstName} ${lastName} lives at ${street} ${city} ${state}.`
)