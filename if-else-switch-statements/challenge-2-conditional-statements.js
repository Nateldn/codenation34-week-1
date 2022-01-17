//Challenge 2  Divisible by 3 & 5 

let num = Math.trunc(Math.random()*100);
console.log(num);
if (num % 3 === 0 && num % 5 === 0) {
    console. log("This number is divisible by 3 or 5")
    } else {
      console.log("This number is not divisible by 3 or 5");
    }

// Switch version 

switch (num) {

    case num % 3 === 0 && num % 5 === 0:
        console.log("This number is divisible by 3 or 5")
        break;
        
    default:
        console.log("This number is not divisible by 3 or 5");

}