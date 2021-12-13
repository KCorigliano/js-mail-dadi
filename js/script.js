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
    email = prompt('Registrazione riuscita! Accedi con la tua email')
    for (i=0; i<emailList.length; i++){
        if (email.toLowerCase() === emailList[i].toLowerCase()){
           correct = true;
        } 
    }

    if(correct){
        alert('Accesso effettuato, benvenuto!');
    } else {
        alert('Email errata, ricaricare la pagina!');
    }
}


// Dadi

let yourNumber =  (Math.random() * 6);
    yourNumberRounded = yourNumber.toFixed(0);

let pcNumber = (Math.random() * 6);
    pcNumberRounded = pcNumber.toFixed(0);

if (yourNumberRounded>pcNumberRounded){
    alert(`Il tuo numero è ${yourNumberRounded},
il numero del pc è ${pcNumberRounded},
hai vinto!`)
} else if (yourNumberRounded === pcNumberRounded){
    alert(`Il tuo numero è ${yourNumberRounded},
il numero del pc è ${pcNumberRounded},
un bel pareggio!`)
} else{
    alert(`Il tuo numero è ${yourNumberRounded},
il numero del pc è ${pcNumberRounded},
hai perso!`)
}

