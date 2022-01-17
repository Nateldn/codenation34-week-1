//Challenge 4 - Palindrome

let num = 30003; // Input Number
num = num.toString(); //Convert to string

// Turn the string into a list/array reverse string and rejoin
let numReverse = num.split("").reverse().join("");

// Check if the reversed string is strictly equal to the original number - if so print this message
if (num === numReverse) {
    console.log("Nice, your number is a palindrome!");
} 
// If its a palindrome print this message 
else {
    console.log("Nope your number is not a palindrome.");
}

