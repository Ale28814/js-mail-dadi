// ESERCIZIO DADI

function random () {

    let dadoValue1 = Math.floor(Math.random() * 6);
    let dadoValue2 = Math.floor(Math.random() * 6);

    if (dadoValue1 > dadoValue2) {

        alert("Complimenti, hai vinto");

    } else if (dadoValue1 == dadoValue2) {

        alert("Pareggio!");

    } else {
        
        alert("Hai perso, ritenta!");
    
    }
};