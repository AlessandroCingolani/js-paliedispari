let paliValid = false;
let wordCheck = false;



// while(!wordCheck){
//   let insertedWord = prompt('Inserire una parola con almeno 3 caratteri');
//   if (insertedWord.length >= 3){
//     wordCheck = true
//   }
// }

const insertedWord = prompt('Inserire una parola con almeno 3 caratteri');

palindroma(insertedWord)

const output = (paliValid) ? 'la parola è palindroma' : 'la parola non è palindroma';

function palindroma(word) {
  let reverseWord=''
  // loop fore take reverse word
  for (let i = word.length -1 ; i >= 0 ;i--){
    reverseWord += insertedWord[i]
  }  
  if(reverseWord === word) {
    paliValid = true;
    return paliValid
  }
}
console.log(output);
