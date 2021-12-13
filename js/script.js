// Email

const emailList = ['ciao@me.com', 'hello@me.com', 'hi@me.com', 'miaemail@me.com'];

let email = prompt('Inserisci la tua email');

let correct = false;

for (i=0; i<emailList.length; i++){
    if (email.toLowerCase() === emailList[i].toLowerCase()){
       correct = true;
    } 
}

if (correct){
    alert('Accesso effettuato!');
} else {
    alert('Email non trovata, registrati ora!');
    let register = prompt('Registra la tua email');
    emailList.push(register);
    email = prompt('Accedi con la tua email')
    for (i=0; i<emailList.length; i++){
        if (email.toLowerCase() === emailList[i].toLowerCase()){
           correct = true;
        } 
    }

    if(correct){
        alert('Registrazione riuscita!');
    } else {
        alert('Email errata, ricaricare la pagina!');
    }
}



