















/**
 * somma numeri e controlla se è paro o disparo
 * @param {number} playerNumber 
 * @param {number} computerNumber
 *  @returns number 
 */
function pariDispari(playerNumber,computerNumber){
  let sum = playerNumber + computerNumber;
  if(sum % 2) return false;
  return true;
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