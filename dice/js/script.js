/*
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

1 - create variables:
    a - user random number;
    b - machine random number;
    c - game outcome (div HTML element);

2 - create an IF condition:
        a - IF user random number is bigger than machine random number, user wins;
        b - IF machine random number is bigger than user random number, machine wins;
        c - IF user random number = machine random number, result is a tie.
*/

//create variables
let userNumber = Math.floor((Math.random() * 6) + 1);
let machineNumber = Math.floor((Math.random() * 6) + 1);
let gameOutcome = document.getElementById('game-outcome');

//CHECK
console.log('the User rolled the dice, the number that came out is ' + userNumber);
console.log('the Computer rolled the dice, the number that came out is ' +machineNumber);
console.log(gameOutcome);


//create the IF condition
if (userNumber > machineNumber) {

    document.getElementById('user-score').innerText = 'You scored ' + userNumber;
    document.getElementById('machine-score').innerText = 'Computer scored ' + machineNumber;
    gameOutcome.innerText = 'You win!';

    //CHECK
    console.log('User wins!');

} else if (userNumber < machineNumber) {

    document.getElementById('user-score').innerText = 'You scored ' + userNumber;
    document.getElementById('machine-score').innerText = 'Computer scored ' + machineNumber;
    gameOutcome.innerText = 'Computer wins!';
    //CHECK
    console.log('Computer wins!')

} else if (userNumber === machineNumber) {

    document.getElementById('user-score').innerText = 'You scored ' + userNumber;
    document.getElementById('machine-score').innerText = 'Computer scored ' + machineNumber;
    gameOutcome.innerText = "It's a tie!";
    //CHECK
    console.log("It's a tie!")
    
}