// Book Constructor 
function Book(title, author, isbn)
{
      this.title = title;
      this.author = author;
      this.isbn = isbn;

}

// UI
function UI() {}

UI.prototype.addBookToList = function(book)
{

   const bookList = document.querySelector('#bookList');
//    create elemet on the table 
const singleRow = document.createElement('tr');
singleRow.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#" calss='delete'>x</a></td>
    `;

bookList.appendChild(singleRow);
// console.log(singleRow);

}
UI.prototype.clearAll = function()
{

}
// Even Listeners 
document.querySelector('#book').addEventListener('submit', addBook);

function addBook(e)
{
// Getting the UI values 
const bTitle = document.querySelector('#title').value; 
const bAuthor = document.querySelector('#author').value; 
const bIsbn = document.querySelector('#isbn').value; 

// Create a Book 
const book = new Book(bTitle,bAuthor,bIsbn);

// Pass to UI 
const ui = new UI();
ui.addBookToList(book);
ui.clearAll();

// console.log(book);

e.preventDefault();
}