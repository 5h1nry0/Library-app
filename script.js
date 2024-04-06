const myLibrary = []
const booksContainer = document.querySelector(".books-container");


function Book(title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read
    } 
}

let submitBook = document.getElementById("submit-book");

submitBook.addEventListener("click", (e) => {   
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let status = document.getElementById('status').value
    myLibrary.push(new Book(title, author, pages, status))
})

function displayBooks() {
    for(let i=0; i<myLibrary.length; i++){
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        const bookText = document.createElement("p"); 
        bookText.classList.add("book-text"); 
        bookText.textContent = myLibrary[i];
        bookCard.appendChild(bookText);

        const deleteBook = document.createElement("button");
        deleteBook.classList.add("delete-book");
        deleteBook.textContent = "Delete book";
        bookCard.appendChild(deleteBook);

        deleteBook.addEventListener('click', () => {
            const index = myLibrary.indexOf(bookText.textContent);
            booksContainer.removeChild(bookCard);
            myLibrary.splice(index, 1);
        })
    } 
}