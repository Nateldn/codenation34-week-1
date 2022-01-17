// Challenge 7: 
const word = "string";
let stringToArray = word.split(''); // Split String into an array
console.log(stringToArray);

let isFirstLastChar = () => {
    if (word[0] === word[5]){ // check if the index 0 and 5 are the same then log this message
        console.log("Yes the first character and the last are the same.")
    }
    
    else { // if the fist and last characters are not the same log this message
        console.log("Nope, the first character and the last are NOT the same.")
    }
}
isFirstLastChar(); // call function

