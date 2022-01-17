//
let drinksMenu = ["Cola", "Fizzy PopPop", "Lemonade", "Orange Juice", "Wine", "Beer"];
let drinksCost = [1.45, 2, 1.5, 2, 4, 5];
let balance = 10;


// Drinks Available - Array output
const seeDrinksList = () => {
    for (let i=0; i < drinksMenu.length; i++) {
        console.log(drinksMenu[i]);
    }
}

// Costs of Drinks and remaining balance
const checkBalance = () => {
console.log(`These are the avialable drinks and price:`);
    for (let i = 0; i < drinksMenu.length; i++) {
        console.log(`${drinksMenu[i]}: £${drinksCost[i]}`)
    }
    console.log(`Your remaining balance is: £${balance}.`)
}



// // Type of Drink Chosen and available balance - output message
// const chosenDrink = (choice) => {
    
// }


//seeDrinksList();
//checkBalance();
