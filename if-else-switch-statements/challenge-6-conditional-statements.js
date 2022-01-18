
// Challenge 6 - Find the index of the last vowel in the string

const string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";  // Input string
const charArray = string.split(''); // Split String into an array

let vowelArray = ["a","e","i","o","u"]; // create an array for vowels
let theAnswer;
let comparison = 0;
for (let i = 0; i < vowelArray.length; i++)
{ // loop through array and store index of each vowel
//console.log(string.lastIndexOf(searchForVowels[i])); // log the last position of each vowel
// Compare the last index of each vowel to find the highest, then log to the console

if (string.lastIndexOf(vowelArray[i]) > comparison) { // check if index of one vowel is greater than 0 
    comparison = string.lastIndexOf(vowelArray[i]); // find the highest indexed vowel
     theAnswer = `The last vowel in the string is ${vowelArray[i]}`; // new variable to store the highest index vowel and this sentance
}

}

console.log(`${theAnswer}`); // log vowel and 








// //Activity 8???
// const para = (one, two) => {
//     return one ** two;

// }

// console.log(para(2,3));