let blockQuote = document.querySelector('#container > blockquote');
let citeAuthor = document.querySelector('#container > cite');
let getQuoteButton = document.querySelector('button');
let getSelectElem = document.querySelector('select');
document.addEventListener('DOMContentLoaded', getQuotes);
getQuoteButton.addEventListener('click', getQuotes);
// console.log(blockQuote.innerText);

function changeCategoryVar() {
    // e.preventDefault();
    getQuotes();
}

function getQuotes() {
var category = getSelectElem.value;
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'xK2RlfM/3j8AfFL5lZYFNw==KsTwe7I7TiLpfWxA'},
    contentType: 'application/json',
    success: function(result) {
        blockQuote.innerHTML = `${result[0].quote}`;
        citeAuthor.innerHTML = `${result[0].author}`;
    },
    error: function ajaxError(jqXHR) {
        blockQuote.innerHTML = `Error: please check your internet connection`
        citeAuthor.innerHTML = '';
        // console.error('Error: ', jqXHR.responseText);
    }
});
}
