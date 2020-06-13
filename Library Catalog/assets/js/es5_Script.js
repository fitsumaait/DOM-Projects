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
    document.querySelector('#title').value = ''; 
    document.querySelector('#author').value = ''; 
    document.querySelector('#isbn').value = ''; 
}
// Adding show Allert function to prototype
UI.prototype.showMessage = function(msg,type)
{
    //UI Variables 
    const container = document.querySelector('.container');
    const form = document.querySelector('#book');
//    Create the div 
    const div = document.createElement('div');
    div.className = `alert ${type}`;
    div.appendChild(document.createTextNode(msg));

    container.insertBefore(div,form);

//   set Timer for the alert to disapear 
    setTimeout(function(){
        document.querySelector('.alert').remove();
         },3000);

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
// if the fields are empty 
if(bTitle ===  '' || bAuthor === '' || bIsbn === '')
{
      ui.showMessage('All Fields are Required !!!','err');
}
else
{
    ui.addBookToList(book);
     ui.showMessage('Book Added Successfully !!!','success');
    ui.clearAll();
}


// console.log(book);

e.preventDefault();
}