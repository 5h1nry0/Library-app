const myLibrary = []

function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read
    } 
}

let addBookForm = document.getElementById("addBookForm");

addBookForm.addEventListener("submit", (e) => {   
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let status = document.getElementById('status').value
    document.getElementById("submit").submit()
    myLibrary.push(new Book(title, author, pages, status))

})

const theHobbit  = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not read yet')

