

// An example of a For Loop - More readable - start and stop conditions are neatly contained

for (let i = 1; i <= 20; i++) {
    console.log(i);
  };


// Example of a While Loop - Varibles are declared before the loop (global scope)  which means the possiblity of an infinite loop if stopping condition is not set which will drain memory and ultimately crash machines.  A while loop will only run if the condition set is 
// A while loop that prints 1, to 20
let counterTwo = 1;
while (counterTwo <= 20) {
  console.log(counterTwo);
  counterTwo++;
}
// Example of a Do...While Loop  - This loop will run at least once whether or not the conditon evaluates to true and then continue to do so until the condition is false. 

let counterString = '';
let i = 1;
 
do {
  counterString = counterString + i;
  i++;
} while (i <= 20);
 
console.log(counterString);

