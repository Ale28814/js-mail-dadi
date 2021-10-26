//ESERCIZIO MAIL

const email = ['pincopallo@gmail.com', 'pippopluto@libero.it', 'tiziocaio@yahoo.it'];
const userEmail = prompt('inserisca la sua email');

if (userEmail === '') {
    alert('Prego, inserisca una email valida');
} else {

    let userFound = false;

    for (let i = 0; i < email.length; i++) {
        
        if (email[i] === userEmail) {
            userFound = true;
            break;
        }
    }

    console.log(userFound);

    if (userFound) {
        console.log('Utente riconosciuto');
    } else {
    console.log('Utente non riconosciuto');
    }
}

