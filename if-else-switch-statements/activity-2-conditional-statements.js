// Activity 2: Pizza Determine if this is a favourite ingredient 
    let toppings = ["Pepperoni", "Ham", "Sausage", "Capers", "Garlic", "Bacon", "Mushrooms", "Green Peppers", "Anchovies" ];

    const lowerCaseToppings = toppings.map(toppings => toppings.toLocaleLowerCase());
    console.log(lowerCaseToppings[0]);
   
    let toppingSelection = Math.floor(Math.random() * toppings.length); // Get a random topping from the array
//console.log(toppingSelection);
    switch (toppingSelection) {
        case "Pepperoni".toLowerCase():
            console.log(`${toppingSelection} is an important ingredint for my pizza.`);
        break;
        case "Ham".toLowerCase():
            console.log(`${toppingSelection} is an important ingredint for my pizza.`);
        break;
        case "Sausage".toLowerCase():
            console.log(`${toppingSelection} is an important ingredint for my pizza.`);
        break;
        case "Capers".toLowerCase():
            console.log(`I don’t mind having ${toppingSelection} on my pizza.`);
        break;
        case "Garlic".toLowerCase():
            console.log(`I don’t mind having ${toppingSelection} on my pizza.`);
        break;
        case "Bacon".toLowerCase():
            console.log(`I don’t mind having ${toppingSelection} on my pizza.`);
        break;
        case "Mushrooms".toLowerCase():
            console.log(`${toppingSelection} should not be on my pizza.`);
        break;
        case "Green Peppers".toLowerCase():
            console.log(`${toppingSelection} should not be on my pizza.`);
        break;
        case "Anchovies".toLowerCase():
            console.log(`${toppingSelection} should not be on my pizza.`);
        break;

        default: 
            console.log(`I don’t mind having ${toppingSelection} on my pizza.`);
    } 