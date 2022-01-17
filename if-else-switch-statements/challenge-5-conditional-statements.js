// Challenge 5 - Workday 

let time = Math.floor(Math.random() * 24);  // Get a random time of day 24 hr clock
let placeOfWork = ["home", "commuting", "cafè", "office", "sleeping"]; //Get Work Location
townOfHome = "London"; // Set home town

const timeOfDayMessage = () => {

    if (time >= 0 && time <7) {
        console.log(`It's ${time} AM I'm at home in ${townOfHome}, ${placeOfWork[4]}`);  
      } 
    else if (time >7 && time <= 9) {
      console.log(`It's ${time} AM I'm ${placeOfWork[1]} to the ${placeOfWork[2]} `);  
    } 
    else if (time >9 && time<= 12) {
        console.log(`It's ${time} AM and I'm in the ${placeOfWork[3]} working at my desk`);
    }

    else if (time >12 && time <14) {
        console.log(`It's ${time} PM I'm having a working lunch at the ${placeOfWork[2]}`);
    }

    else if (time >14 && time <18) {
        console.log(`It's ${time} PM I'm back for the afternoon slog in the ${placeOfWork[3]}.`);
    }

    else if (time >18 && time <20) {
        console.log(`It's ${time} PM I'm at ${placeOfWork[0]}.`);
    }

    else {
        console.log(`Im at home eating or sleeping`);
    }
}

timeOfDayMessage();


var today = new Date();
var time2 = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(`Today's date is ${today} - the time is currently ${time}`);

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

randomDate(new Date(2012, 0, 1), new Date())

console.log(randomDate());


