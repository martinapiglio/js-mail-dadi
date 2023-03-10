/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

1 - create variables:
    a - user email;
    b - submit button;
    c - list of granted emails (array variable);
    d - "granted access" variable (to be set as false here and as true in the IF condition);

2 - when button is clicked:
    a - create a FOR cycle for which:
        i - the variable i = 0 is initialized;
        ii - condition to be verified is that i < (array variable).length;
        iii - add a unit to variable i (i++);

        then, inside the cycle, create an IF condition:
                IF user email IN granted emails list, 
                THEN "granted access" variable = true; 

    b - create an IF condition:
        i - IF "granted access" variable = true write "access granted";
        ii - ELSE write "access denied";
*/

//create variables
let userEmailEl = document.getElementById('userEmail');
let submitButton = document.getElementById('submit-button');
let emailsList = ['pippo@gmail.com', 'topolino@gmail.com', 'pluto@gmail.com', 'minnie@gmail.com', 'paperino@gmail.com'];
let grantedAccess = false;

//button click
submitButton.addEventListener('click', function() {

    let userEmail = userEmailEl.value;
    //check
    console.log(userEmail);
    //check

    //FOR cycle
    for (let i = 0; i < emailsList.length; i++) {

        //IF user email IN granted emails list, THEN "granted access" variable = true; 
        if (emailsList[i] === userEmail) {

            grantedAccess = true;

        };

    };

    //IF condition: IF "granted access" variable = true write "access granted";
    if (grantedAccess === true) {

        document.getElementById('check-outcome').innerText = 'Access Granted!';
        document.getElementById('check-outcome').style.color = 'green';

        //CHECK
        console.log('user email present in emails list');

    //ELSE write "access denied";
    } else {

        document.getElementById('check-outcome').innerText = 'Access Denied!';
        document.getElementById('check-outcome').style.color = 'red';

        //CHECK
        console.log('user email not present in emails list');
    };

});

let cancelButton = document.getElementById('cancel-button');

cancelButton.addEventListener('click', function() {

    userEmail.value = '';

});