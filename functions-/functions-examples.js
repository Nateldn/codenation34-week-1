//========= Functions: Examples ==============/

// Coffee Grinding Example
let coffeeIsGrinding = false;
const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Stopping the grind");
        coffeeIsGrinding = false;
    } else {
        console.log("Grinding is about to begin");
        coffeeIsGrinding = true;
    }
}
pressGrindBeans();


// Cash Withdrawal Example

let balance = 1000;
let amount = 100;
let accNumber = 50449921;

const cashWithdrawal = (amount, accnum) => {
    balance -= amount;
    console.log(`${amount} withdrawn from account ${accnum}`);
}
cashWithdrawal(amount, accNumber);

console.log(`The new balance for ${accNumber} is ${balance} `)


const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7, 3);
console.log(addUp(2, 5));
