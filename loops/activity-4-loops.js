// Loops - Activity 4 - Four Films: Are any Ghostbusters?


const films = ["Matrix", "Seven", "Saving Private Ryan", "Gladiator", "Ghostbusters"].map(v => v.toLowerCase()); // list films in array

for(let i=0; i <films.length; i++) { //loop through array
   // console.log(films[i]); // Check loop
}


let filmCheck = () => {
       
    if (films.includes("Ghostbusters".toLowerCase())){ // change input to lowercase - if string ghostbusters exists log this message
        console.log("yey it’s ghostbusters");
    }
    else {
        console.log("booo, we want ghostbusters"); //if string ghostbusters is not found log this message
    }
}

filmCheck();
