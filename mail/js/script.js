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
                THEN "granted access" variable == true 

    b - create an IF condition:
        i - IF "granted access" variable == true write "access granted";
        ii - ELSE write "access denied"



*/