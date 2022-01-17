// Activity 5: Numbers between 1 and 30 Diviisble by Seven

const divisibleBySeven = () => { // create function 

    for (let i = 0; i < 6; i++ ) { // set iterator to postion zero, run the loop six times
        let randoNum = Math.ceil(Math.random() * 30 + 1); // log an integer between 1 and 30
        
        if (randoNum % 7 == 0) {
            console.log(`The number ${randoNum} is divisible by 7`);
        }
        else {
            console.log(`The number ${randoNum} is NOT divisible by 7`);
        }
       
    }  
}

divisibleBySeven();
