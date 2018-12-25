const simpleQuotes = [
    {
        name: 'author number 1',
        quote: 'quote number 1'
    },
    {
        name: 'author number 2',
        quote: 'quote number 2'
    },
    {
        name: 'author number 3',
        quote: 'quote number 3'
    },
    {
        name: 'author number 4',
        quote: 'quote number 4'
    },
    {
        name: 'author number 5',
        quote: 'quote number 5'
    },
    {
        name: 'author number 6',
        quote: 'quote number 6'
    }
]


const quoteBtn =  document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');


quoteBtn.addEventListener('click', displayQuote);


function displayQuote(){
    let random = Math.floor(Math.random() * simpleQuotes.length);
    quote.innerHTML = simpleQuotes[random]['quote'];
    quoteAuthor.innerHTML = simpleQuotes[random]['name'];


}



