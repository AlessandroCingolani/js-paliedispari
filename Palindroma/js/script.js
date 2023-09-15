let wordCheck = false;



// while(!wordCheck){
//   let insertedWord = prompt('Inserire una parola con almeno 3 caratteri');
//   if (insertedWord.length >= 3){
//     wordCheck = true
//   }
// }

const insertedWord = prompt('Inserire una parola con almeno 3 caratteri');

let result = palindroma(insertedWord)

const output = (result) ? 'la parola è palindroma' : 'la parola NON è palindroma';


// function for check palindroma word
function palindroma(word) {
  let reverseWord=''
  // loop fore take reverse word
  for (let i = word.length -1 ; i >= 0 ;i--){
    reverseWord += insertedWord[i]
  }  
  if(reverseWord === word) {
    return true
  }else  {
    return false
  }
}
console.log(output);
