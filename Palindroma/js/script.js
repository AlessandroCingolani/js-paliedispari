let wordCheck = false;
let insertedWord,result;
const output = document.getElementById('output');


 while(!wordCheck){
   insertedWord = prompt('Inserire una parola con almeno 3 caratteri');
   if (insertedWord.length >= 3 && isNaN(insertedWord)){
    wordCheck = true;
    result = palindroma(insertedWord)
    message = (result) ? 'La parola è palindroma' : 'la parola NON è palindroma';
   }else {
    alert('Errore inserire parola lunga piu di 3 caratteri!')
   }
   output.innerHTML = message;
 }



 


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

