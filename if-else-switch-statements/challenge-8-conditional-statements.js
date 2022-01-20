
num1 = Math.ceil(Math.random()*100); // Generate a random number between 1 and 100
num2 = Math.ceil(Math.random()*100); // Generate a random number between 1 and 100
numberSum = num1 + num2; // Sum of two numbers
numberMultiple = num1 * num2; // Multiply the two numbers


const calculateEvenOrNot = () => {  // function to see if sum is even
    if (numberSum % 2 === 0) { // Does the remainder of the sum when divided by 2 equal zero?
        console.log(`${numberSum}` ); // Print the sum of the number to the screen
    }
    else { // If not print the multiple of the number
        console.log(`The numbers ${num1} and ${num2} were multipled together to make ${numberMultiple} as the sum of the two numbers (${numberSum}) is an odd number.`);
    }
    
}

calculateEvenOrNot();


