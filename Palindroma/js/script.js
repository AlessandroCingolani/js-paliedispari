let paliValid = false;
let wordCheck = false;



// while(!wordCheck){
//   let insertedWord = prompt('Inserire una parola con almeno 3 caratteri');
//   if (insertedWord.length >= 3){
//     wordCheck = true
//   }
// }

const insertedWord = prompt('Inserire una parola con almeno 3 caratteri');
let reverseWord=''

for (let i = insertedWord.length -1 ; i >= 0 ;i--){
  reverseWord += insertedWord[i]
}

console.log(reverseWord);
