
const palindrome = (str) => {
    let strReverse = str.replace(/[\W_]+/g," ").split("").reverse().join("");
    if (str === strReverse)
    console.log("Yes this string is a palindrome");
  }
  
  palindrome("sgdgfdgfd");

