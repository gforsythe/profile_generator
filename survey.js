const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name?', (name) => {
  rl.question('What is you favourite activity?', (activity) => {
    rl.question('Which meal is your favourite ? (eg: dinner, brunch, etc.)', (meal) => {
      rl.question('What is your favourite thing to eat for that meal?', (favfood) => {
        rl.question('Which sport is your absolute favourite?', (sport) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (power) => {
            
            rl.close();

            console.log(`This is ${name}. Their favourite activity is ${activity}.\nTheir favourite meal is ${meal}.\nTheir favourite thing to eat in that meal is ${favfood}.\nTheir favourite sport is ${sport} and if they could have any superpower in the world it would be ${power}.\n `);
 
          })
        })
      })
    })
  })
});















