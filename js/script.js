

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

setTimeout(askUserNumbs, 3500);

let numbersTried = [];

function askUserNumbs() {


    for(let n = 0; n < 5; n++) {
    numbersTried.push(parseInt(prompt("inserisci i numeri appena visualizzati")))
    } 
}



setTimeout(checkToWin,3500)

function checkToWin() {
    let userNumbers= numbersTried;
    const result = userNumbers.filter(function(currentNumb){
        return numbs.includes(currentNumb);
    })

    if (result.length === 0){
        alert('NON HAI AZZACCATO MANCO UN NUMERO!')
    } else {alert('COMPLIMENTI, HAI AZZACCATO I SEGUENTI NUMERI: ' + result.join( ', '))}


    /* for(let i =0; i < numbs.length; i++){
        
        if(numbersTried.includes(numbs[i])){
        
            alert('HAI VINTO!');
            break
        } else if ( )
        { alert('Spiacente, hai perso!')}
    
    console.log(numbs,userNumbers);
} */

}



