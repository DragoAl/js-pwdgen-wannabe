
/* RICHIESTA ESERCIZIO
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina “La password assegnata è: ” nomecognomecolorepreferito21
*/

// ASK THE USER HIS NAME
let userName = prompt ("Scrivi il tuo nome");

// console.log (userName) DEBUG;

// ASK THE USER HIS SURNAME
let userSurname = prompt ("Scrivi il tuo cognome");

// console.log (userSurname) DEBUG;

// ASK THE USER HIS FAVOURITE COLOR
let userFavColor = prompt ("Scrivi il tuo colore preferito");

// console.log (userFavColor) DEBUG;

// PRINT ON THE SCREEN 'La password assegnata è: "nomecognomecolorepreferito21"'
document.getElementById("password-box").innerHTML = `La Password assegnata è: 
${userName}${userSurname}${userFavColor}21`