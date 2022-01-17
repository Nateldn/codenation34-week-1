//Variables Activity 1 - Write code that stores your name, age, and favourite colour. 
// The stored data must be output to the console in a complete sentence


let myName = "Nate Kwarteng";
let favColour = "electric blue";
let age = "21"; 

console.log(`Hi my name is ${myName}, I'm clearly ${age} and my favourite colour is ${favColour}.`)


console.log(myName);
console.log(myName.length);
console.log("Nate Kwarteng".length);

console.log(myName.toLowerCase());
console.log(myName.toLowerCase(),'\n',myName.toUpperCase());

// Log Random Number to the console
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));



let randomNum = Math.random(Math.floor());
console.log(randomNum);
console.log(Math.ceil(randomNum));
console.log(Math.floor(randomNum));

randomNum = randomNum + 10;

randomNum += 10;

console.log(randomNum);
