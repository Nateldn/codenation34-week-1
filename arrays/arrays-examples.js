

let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];
//console.log(coffeeOrder);
coffeeOrder.push("Dave - Latte");

//console.log(coffeeOrder);

coffeeOrder.pop();

console.log(coffeeOrder);

const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
};
console.log("The temperature is " + getFahrenheit(15) + "°F");
// Output: The temperature is 59°F
 


// Convert to an array



// Naughts and Crosses

// let theGrid = [["x", "x", "x"],
//                ["o", " ", "o"],
//                ["x", " ", "o"]
//               ];

// console.log(theGrid[0][0]);
// console.log(theGrid[0][1]);
// console.log(theGrid[0][2]);
 