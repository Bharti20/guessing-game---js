
console.log('------------------ Welcome to the Guessing Game! -----------------')
const input = require('readline-sync')
let numbers = [1,2,3,4,5,6,7,8,9,10]
let computerSelect = numbers[Math.floor(Math.random()*numbers.length)]
console.log(computerSelect);
let lives = 5
while(lives>0) {
    let userInput = input.question('gusse a number----')
    if(userInput == computerSelect) {
        console.log('You won!')
        break;
    }else if(userInput>computerSelect){
        console.log(`Your number is high. you have ${--lives} turn left`)
    }else if(userInput<computerSelect){
        console.log(`Your number is low. you have ${--lives} turn left`)
    }
    if(lives == 0){
        console.log('Sorry you loose the game. Try next time')
        break;
    }
}
