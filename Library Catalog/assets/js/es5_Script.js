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
 console.log('Book Added ...');
e.preventDefault();
}