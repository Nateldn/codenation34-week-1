
// Challenge 6 - Find the index of the last vowel in the string

const string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";  // Input string
const charArray = string.split(''); // Split String into an array

let searchForVowels = ["a","e","i","o","u"]; // create an array for vowels

for (let i = 0; i < searchForVowels.length; i++)
{ // loop through array and store index of each vowel
console.log.sort(string.lastIndexOf(searchForVowels[i])); // log the last position of each vowel
// Compare the last index of each vowel to find the highest, then log to the console
}


.sort(function(a,b){return b-a;})[0]






// //Activity 8???
// const para = (one, two) => {
//     return one ** two;

// }

// console.log(para(2,3));