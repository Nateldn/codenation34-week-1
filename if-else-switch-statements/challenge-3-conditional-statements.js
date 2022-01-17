//Challenge 3 - Fizz Buzz

num = 22; // Takes input
if (num % 3 === 0) { // if the nubmer can be divided by three log, this message
    console. log("fizz")
    } else if (num % 5 === 0) { // if the nubmer can be divided by five, log this message
      console.log("buzz");
    }
    else if(num % 3 === 0 && num % 5 === 0) { // if the nubmer can be divided by both three and five, log this message
        console.log("fizz buzz")
    }
    else { // if the nubmer cannot be divided by either three or five, then log this message
        console.log("This number is niether divisible by 3 or 5")
    }
