// Challenge 7: 
const word = "Gosh, this is working";
let stringToArray = word.toLocaleLowerCase().split(''); // Convert to lowercase and split String into an array
console.log(stringToArray);

const isFirstLastChar = () => {

    let firstChar = stringToArray[0];
    console.log(firstChar);
    let lastChar = stringToArray[stringToArray.length-1];
    console.log(lastChar);


    if (firstChar === lastChar) {
       // return true
        console.log(`Yes the first letter (${firstChar}) is the same as the last letter which is also (${lastChar}).`)
    }
        
    else { // if the fist and last characters are not the same log this message
       // return false    
        console.log("Nope, the first character and the last are NOT the same.")
        }

    }


isFirstLastChar(); // call function



