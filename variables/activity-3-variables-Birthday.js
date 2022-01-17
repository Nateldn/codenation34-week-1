//Variables - Activity 3 How many days until birthday



// How many days have passed since brith
let currentDate  = Date.parse("2022, 1, 11");
let birthday = Date.parse("1977, 10, 21");
let diff = new Date(currentDate - birthday);
let days = diff/1000/60/60/24;
console.log(Math.ceil(days));