// Book Constructor 
function Book(title, author, isbn)
{
      this.title = title;
      this.author = author;
      this.isbn = isbn;

}

// UI
function UI() {}

// Even Listeners 
document.querySelector('#book').addEventListener('submit', addBook);

function addBook(e)
{
// Getting the UI values 
const bTitle = document.querySelector('#title').value; 
const bAuthor = document.querySelector('#author').value; 
const bIsbn = document.querySelector('#isbn').value; 

console.log(bTitle);
console.log(bAuthor);
console.log(bIsbn);

e.preventDefault();
}