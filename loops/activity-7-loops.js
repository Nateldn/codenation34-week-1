// // program to check if a number is prime or not  https://www.programiz.com/javascript/examples/prime-number

// // take input from the user
// const number = Math.ceil(Math.random() * 20); // log an integer between 1 and 30
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }


// const checkIfPrime = () =>{ 
//     for(let i=0; i <=20; i++);
//     console.log([i]);
// }


// checkIfPrime();


const disoverPrimes = () => {
    let primeNumbersBetween1And20 = [];
    for(let i = 1; i < 20 +1; i++){ // loop through from 0 to 20
        if (i % 1 == 0){ // acertain if number is divisible by 1 or itself
            console.log(i);
        }
        else {
            console.log(`No prime numbers found.`)
        }
    }
}

disoverPrimes();




// Stack Overflow 3rd Solution https://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100 / http://jsfiddle.net/K2QJp/ Adpated to arrow function
const findPrimes = (num) => {
    if (num < 2)
        return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            return false;
    }
    return true;
} 
console.log(findPrimes(12)); // testing to see function works

for(let i = 0; i < 20; i++){
    if(findPrimes(i)) console.log(i);
}