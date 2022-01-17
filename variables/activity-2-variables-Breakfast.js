// Variables Activity 2 - What you might eat today

let breakfast1 = "muesli";
let lunch1 = "a sandwich";
let dinner1 = "pasta";

console.log(`Today I had ${breakfast1.toUpperCase()} for breakfast, ${lunch1.toUpperCase()} for lunch and ${dinner1.toUpperCase()} for dinner.`)


breakfast1 = "fruit";
lunch1 = "soup";
dinner1 = "lasagne";

console.log(`Today I had ${breakfast1.toUpperCase()} for breakfast, ${lunch1.toUpperCase()} for lunch and ${dinner1.toUpperCase()} for dinner.`)


//  Activity 2 - Alternate solution using arrays to and Math.random to dynamically populate the sentance


let breakfast = ["cereal", "toast", "croissant"]
let lunch = ["pasta salad", "soup", "finger sandwiches"]
let dinner = ["roast dinner", "lasagne", "pizza"]

let random = Math.floor(Math.random() * breakfast.length);
let random2 = Math.floor(Math.random() * lunch.length);
let random3 = Math.floor(Math.random() * dinner.length);
console.log(" Today, I had " + (breakfast[random]) + ", then  " + (lunch[random2]) + " for lunch and then " + (dinner[random3]) + " for dinner.");