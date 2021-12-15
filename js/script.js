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
    let email = prompt('Registra la tua email');
    emailList.push(email);
    email = prompt('Registrazione riuscita! Accedi con la tua email')
    
    
        
    if(correct){
        alert('Accesso effettuato!')
    } else {
        console.log('infinite loop');
        do {
            correct=false;
            alert("Email non corretta!");
            email = prompt("Accedi la tua email!");
            for (i=0; i<emailList.length; i++){
                if (email.toLowerCase() === emailList[i].toLowerCase()){
                   correct = true;
                } 
            }
        } while (!correct);
        
        alert('Accesso riuscito, benvenuto!');
    } 
    
}


// Dadi

let yourNumber =  Math.floor(Math.random() * ((6 + 1) - 1)) + 1;
    yourNumberRounded = yourNumber.toFixed(0);

let pcNumber = Math.floor(Math.random() * ((6 + 1) - 1)) + 1;
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

const buttonHTML = document.querySelector('.button');

buttonHTML.addEventListener('click', function(){
let yourNumber =  Math.floor(Math.random() * ((6 + 1) - 1)) + 1;
    yourNumberRounded = yourNumber.toFixed(0);

let pcNumber = Math.floor(Math.random() * ((6 + 1) - 1)) + 1;
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
});