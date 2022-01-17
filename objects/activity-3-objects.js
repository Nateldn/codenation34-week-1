// // Activity 3 - Create an Object with the values of:
// name, typeOfPet, age and colour
// Ad methods called eat and drink. 
//They should return a string saying:  Your pet name is eating/drinking.

// const pet = {
//     name: "Rover",
//     typeOfPet: "dog",
//     age: "3",
//     color: "brown",
//     eat: (eating) => {
//         console.log(`${pet.name} is eating ${eating}`);
//     },
//     drink: (drinking) => {
//         console.log(`${pet.name} is drinking ${drinking}`);
//     }
// }

// pet.eat("dog food");
// pet.drink("water");


// Activity 3 - Create an Object with the values of:

const pet = {
    name: "Rover",
    typeOfPet: "dog",
    age: "3",
    color: "brown",
    eat: () => {
        console.log(`${pet.name} is eating`); // This returns undefined due to a quirk with Javascript however arrow functions should be the preferred way to future proof code.
    },
    drink: function () {
        console.log(`${this.name} is drinking`);
    }
}

pet.eat();
pet.drink();