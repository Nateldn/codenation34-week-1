
// Activity 1 Favourite Website Array

let favWebsiteList = [
    "The Atlantic",
    "Renchlist",
    "Google"
];


favWebsiteList.pop();
console.log(favWebsiteList);

favWebsiteList.push("Amazon", "Instagram");
console.log(favWebsiteList);

favWebsiteList.splice(0, 0, 'imdb.com');
console.log(favWebsiteList);


favWebsiteList.splice(0, 2, 'wikipedia.org');
console.log(favWebsiteList);

console.log(favWebsiteList.slice(1));


// // Example 2: Sandwich Order

let sandwichOrder = (topping1, topping2, topping3, topping4, topping5) => {
   console.log(topping1, topping2, topping3, topping4, topping5);
}

sandwichOrder("ham", "cheese", "pickle", "salad cream", "lettuce")



//Example 3 - Add an item to the front of the list
let newArray = ["item1", "item2", "item3"];

console.log(newArray.splice(0, 0, "new item"));


