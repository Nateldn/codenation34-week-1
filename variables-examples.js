//Javascript always starts counting from 0 -
// When we create a create a string and try to count the number of characters [chartAt] js creates a list/array of the characters and then counts them
console.log("All around the world".charAt(0).toUpperCase());
console.log("All around the world".charAt(1).toUpperCase());
console.log("All around the world".charAt(2).toUpperCase());
console.log("All around the world".charAt(3).toUpperCase());
console.log("All around the world".charAt(4).toUpperCase());
console.log("All around the world".charAt(5).toUpperCase());
console.log("All around the world".charAt(6).toUpperCase());
console.log("All around the world".charAt(7).toUpperCase());
console.log("All around the world".charAt(8).toUpperCase());
console.log("All around the world".charAt(9).toUpperCase());



// Template Literals

let favDrink = "coffee";
console.log(favDrink);


console.log("My favourite drink is " + favDrink);

favDrink = "tea";
console.log(`My favourite drink is ${favDrink} beacuse it's nice`);


let fullName = "Nate Kwarteng";
let age = "21";
let favColour = "blue";

console.log(`My name is ${fullName.toUpperCase()}, I'm ${age} years old and my favourite colour is ${favColour.charAt(2).toUpperCase()}.`);