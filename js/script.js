

// creo una funzione che acceta come parametri la quantità di numeri da stampare ed il numero massimo stampabile
function myRandomInts(quantity, max){
    const numb = []
    while(numb.length < quantity){
      let candidateInt = Math.floor(Math.random() * max) + 1
      if(numb.indexOf(candidateInt) === -1) numb.push(candidateInt)
    }
  return(numb)
  }
  numbs= myRandomInts(5, 100)

  //stampo nel DOM i numeri ottenuti
  document.getElementById("numbers").innerHTML = numbs;


// creo una funzione che rimuove i numeri dopo 30 secondi
setTimeout(() => {
    const numbers = document.getElementById('numbers');
  
    // rimuovo i numeri dal DOM
    numbers.style.display = 'none';
  
  }, 3000); 

//chiedo all'utente di inserire 5 numeri uno per volta

setTimeout(askUserNumbs, 4000);

function askUserNumbs() {

    let numbersTried = [];

    for(let n = 0; n < 5; n++) {
    numbersTried.push(parseInt(prompt("inserisci i numeri appena visualizzati")))
    } 

    return numbersTried;
}

userNumbers= askUserNumbs;

setTimeout(checkToWin,4500)

function checkToWin() {
    if(numbs === userNumbers) {
        alert("vittoria!")
    } else {
        alert("spiacente, non hai indovinato tutti i numeri!")
    }
}


checkToWin;


