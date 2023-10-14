const QUOTE_API_URL = 'http://api.quotable.io/random'

const quote = document.getElementById('quote');
const quoteInput = document.getElementById('quoteInput');



quoteInput.addEventListener('input', (e) => {

    let isCorrect = true;

    const arrayOfQuote = quote.querySelectorAll('span');
    const arrayOfInput = quoteInput.value.split('');
    arrayOfQuote.forEach((charSpan, index) => {

        const character = arrayOfInput[index];
        if(character==null){
            charSpan.classList.remove('correct');
            charSpan.classList.remove('incorrect');
            isCorrect = false;
        }
       else if (character === charSpan.innerText) {
            charSpan.classList.add('correct');
            charSpan.classList.remove('incorrect');
        }
        else{
            charSpan.classList.add('incorrect');
            charSpan.classList.remove('correct');
            isCorrect = false;
        }


    })
    if(isCorrect){
        getNextQuote()
    }

})


function getRandomQuote() {
    return fetch(QUOTE_API_URL)
      .then(response => response.json())
      .then(data => data.content)
  }
async function getNextQuote() {
    let correct = true;
    quote.innerHTML = "";
    const RandomQuote = await getRandomQuote(); 
    const splittedQuote = RandomQuote.split('');

    splittedQuote.forEach(char => {
        const charSpan = document.createElement('span');
        // charSpan.classList.add('correct');
        charSpan.innerText = char;
        quote.appendChild(charSpan)
    })
    
    quoteInput.value = null;

    



}
getNextQuote();

