let wordCheck = false;
let numberCheck = false;
const output = document.getElementById('output');
let playerNumber,playerPariDispari,sum; 


// convalid pari or dispari
do{
  playerPariDispari = prompt('Scegli pari o dispari').toLowerCase();
  if (playerPariDispari === 'pari' || playerPariDispari === 'dispari'){
   wordCheck = true;
 }else {
   alert('Errore inserire campi corretti!')
  }
  }while(!wordCheck)

  console.log(playerPariDispari);

// convalid player number
do{
  playerNumber = parseInt(prompt('Scegli numero da 1 a 5'));
  if (playerNumber > 0 && playerNumber < 6 ){
   numberCheck = true;
 }else {
   alert('Errore inserire campi corretti!')
  }
}while(!numberCheck)

console.log(playerNumber);

// get number random for computer
let computerNumber = randomGen(1,5)

// function for return paro or disparo
let result = pariDispari(playerNumber,computerNumber)


// check result
if(result === playerPariDispari ){
  output.innerHTML=( `il totale è ${sum}   Vince il giocatore`);
}else{
  output.innerHTML=( `il totale è ${sum}   Vince il computer`);
}
console.log('numero computer ' + computerNumber);

/**
 * somma numeri e controlla se è paro o disparo
 * @param {number} playerNumber 
 * @param {number} computerNumber
 * @returns string 
 */
function pariDispari(playerNumber,computerNumber){
  sum = playerNumber + computerNumber;
  if(sum % 2){
    console.log('il totale è disparo');
    return 'dispari';
  }else{
    console.log('il totale è paro');
    return 'pari';
  }
}



/**
 * estrae numero random per computer
 * @param {number} min 
 * @param {number} max
 * @returns number
 */
function randomGen(min,max) {
  return Math.floor(Math.random() * (max - min +1))+ min;
}