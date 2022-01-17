// For Loop

let favDrinks = ["Coke", "Fanta", "Tonic", "Red Bull"]

for (let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
  };


  // using for Loops with if statements

  let multiplesTwo = [];

  for (let i =0; i <20; i++) {
      if (i % 2 == 0) {
          multiplesTwo.push(i);
      }
  }

  console.log(`Numers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);
  

//============= While loops
  let i = 0;
  while (i < 99 +1) {
    console.log(i);
    i++;
  }



let age = 15;
while (age < 18){
  console.log("You're a child!");
  age++;

}
console.log("You're an adult!");

for (let i=0; i <18; i++) {
  console.log("You're a child!");
  age++;

}


const cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard ="Club";


while (currentCard != "Spade") {
  console.log(currentCard);
  currentCard = cards[Math.floor(Math.random()*4)];

}
console.log(currentCard);


