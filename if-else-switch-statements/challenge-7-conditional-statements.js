// // Challenge 7: 
// const word = "going";
// let stringToArray = word.split(''); // Split String into an array
// console.log(stringToArray);

// let isFirstLastChar = () => {

//     let firstChar = stringToArray[0];
//     let lastChar = stringToArray[stringToArray.length-1];

//     // for (let i=0; i < isFirstLastChar.length; i++) {
    
//     //     if (word[0] === word[4]){ // check if the index 0 and 5 are the same then log this message
//     //         console.log("Yes the first character and the last are the same.")
//     //     }
        
//     //     else { // if the fist and last characters are not the same log this message
//     //         console.log("Nope, the first character and the last are NOT the same.")
//     //     }

//     // }

//     let objOutput = {
//         first: firstChar,
//         last: lastChar,
//     };
//     let 

//     return objOutput;

   
// }
// isFirstLastChar(); // call function



// let myArray = ['Rodel', 'Mike', 'Ronnie', 'Betus'];

// const firstAndLast = (array) => {

//     let firstItem = myArray[0];
//     let lastItem = myArray[myArray.length-1];

//     let objOutput = {};
//     objOutput[firstItem]=lastItem

// return objOutput;
// }

// let display = firstAndLast(myArray);

// console.log(display);

const myArray = ['Rodel', 'Mike', 'Ronnie', 'Betus'];

const { 0: first, length, [length -1]: last } = myArray //getting first and last el from array
const obj = { first, last }

console.log(obj) // {  first: "Rodel",  last: "Betus" }