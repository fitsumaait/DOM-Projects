            class Book
            {
            constructor(title, author, isbn)
            {
            this.title = title;
            this.author = author;
            this.isbn = isbn;
            }
            }

            class UI
            {
                addBookToList(book)
                {
                
                const bookList = document.querySelector('#bookList');
                //    create elemet on the table 
                const singleRow = document.createElement('tr');
                singleRow.innerHTML = `
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class='delete'>x</a></td>
                    `;
                
                bookList.appendChild(singleRow);
                // console.log(singleRow);
                
                }
                clearAll()
                {
                    document.querySelector('#title').value = ''; 
                    document.querySelector('#author').value = ''; 
                    document.querySelector('#isbn').value = ''; 
                }
                // Adding show Allert function to prototype
                showMessage(msg,type)
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
                        },1000);
                
                }
                // delete books 
                deletSingleBook(target)
                {
                
                    if(target.className === 'delete')
                    {
                    target.parentElement.parentElement.remove();
                    }
                
                }

            }
// Local Storage Class 
class StoreToDb
{
     static getBooks()
     {
    
        let books;
        if(localStorage.getItem('books') === null)
        {
            books = [];
        }
        else
        {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
     }
     static displayBooks()
     {
         const books = StoreToDb.getBooks();
         books.forEach(function(book){
             const ui = new UI();
             ui.addBookToList(book);
         });

     }
     static addBook(book)
     {
          const books = StoreToDb.getBooks();
          books.push(book);
          localStorage.setItem('books',JSON.stringify(books));  
     }
     static removeBook(isbn)
     {
          const books = StoreToDb.getBooks();

          books.forEach(function(book,index)
          {
              if(book.isbn === isbn)
              {
                  books.splice(index,1);
              }
          });
          localStorage.setItem('books',JSON.stringify(books)); 

     }


}

        // Dom Evenet load 
        document.addEventListener('DOMContentLoaded', StoreToDb.displayBooks);
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
            // Add to DB
            StoreToDb.addBook(book);
            ui.showMessage('Book Added Successfully !!!','success');
            ui.clearAll();
        }


        // console.log(book);

        e.preventDefault();
        }

        // Adding delete 
        document.querySelector('#bookList').addEventListener('click', deletBook);

        function deletBook(e)
        {
        // Pass to UI 
        const ui = new UI();
        if(e.target.className === 'delete')
        {
            ui.deletSingleBook(e.target);
            StoreToDb.removeBook(e.target.parentElement.previousElementSibling.textContent);
            ui.showMessage('Book Removed!!','success');
            e.preventDefault();
        }

        }