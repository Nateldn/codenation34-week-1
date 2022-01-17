

// An example of a For Loop - More readable - start and stop conditions are neatly contained

for (let i = 1; i <= 20; i++) {
    console.log(i);
  };


// Example of a While Loop - Varibles are declared before the loop (global scope) possiblity of an infinite loop if stopping condition is not set which will drain memory and ultimately crash machines

while (condition) {
    // code block to be executed
  }

  let i = 1;
  while (i <= 20) {
    console.log(i);
    i++;
  }

// Example of a Do...While Loop  - This loop will run at least once whether or not the conditon evaluates to true and then continue to do so until the condition is false. 

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

