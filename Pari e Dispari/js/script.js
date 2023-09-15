let wordCheck = false;
let numberCheck = false;
const output = document.getElementById('output');
let playerNumber 
let playerPariDispari

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

let computerNumber = randomGen()

let result = pariDispari(playerNumber,computerNumber)

console.log('totale ' + result);
console.log('numero computer ' + computerNumber);

/**
 * somma numeri e controlla se è paro o disparo
 * @param {number} playerNumber 
 * @param {number} computerNumber
 * @returns number 
 */
function pariDispari(playerNumber,computerNumber){
  let sum = playerNumber + computerNumber;
  if(sum % 2) return false;
  return true;
}



/**
 * estrae numero random per computer
 * @returns number
 */
function randomGen() {
  return Math.floor(Math.random() * (5 - 1 +1))+ 1;
}