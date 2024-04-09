const myLibrary = []
const booksContainer = document.querySelector(".books-container");


function Book(title,author,pages,status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function() {
        return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.status
    } 

}


let addBook = document.getElementById("add-book");

addBook.addEventListener("click", (e) => {
    const formContainer = document.getElementById('form-container')

    const form = document.createElement("form");
    form.setAttribute("id", "addBookForm");
    formContainer.appendChild(form)

        const formRowOne = document.createElement("div");
        formRowOne.setAttribute("id", "form-row-1");
        form.appendChild(formRowOne)

            const titleLabel = document.createElement("label");
            titleLabel.setAttribute("for", "title");
            titleLabel.textContent = "Title"
            formRowOne.appendChild(titleLabel);

            const inputTitle = document.createElement("input");
            inputTitle.setAttribute("type", "text");
            inputTitle.setAttribute("id", "title");
            inputTitle.setAttribute("placeholder", "Type title");
            formRowOne.appendChild(inputTitle);

        const formRowTwo = document.createElement("div");
        formRowTwo.setAttribute("id", "form-row-2");
        form.appendChild(formRowTwo)

            const authorLabel = document.createElement("label")
            authorLabel.textContent = "Author"
            authorLabel.setAttribute("for", "author");
            formRowTwo.appendChild(authorLabel)

            const inputAuthor = document.createElement("input")
            inputAuthor.setAttribute("type", "text");
            inputAuthor.setAttribute("id", "author");
            inputAuthor.setAttribute("placeholder", "Type author");
            formRowTwo.appendChild(inputAuthor);

        const formRowThree = document.createElement("div")
        formRowThree.setAttribute("id", "form-row-3");
        form.appendChild(formRowThree)

            const pagesLabel = document.createElement("label")
            pagesLabel.textContent = "Pages"
            pagesLabel.setAttribute("for", "pages");
            formRowThree.appendChild(pagesLabel)

            const inputPages = document.createElement("input")
            inputPages.setAttribute("type", "number");
            inputPages.setAttribute("id", "pages");
            inputPages.setAttribute("placeholder", "Type number of pages");
            formRowThree.appendChild(inputPages);
        
        const statusLegend = document.createElement("legend")
        statusLegend.textContent = "Status:"
        form.appendChild(statusLegend);

        const readLabel = document.createElement("label")
        readLabel.textContent = "Read"
        readLabel.setAttribute("for", "read");
        form.appendChild(readLabel)

        const inputRead = document.createElement("input")
        inputRead.setAttribute("type", "radio");
        inputRead.setAttribute("id", "read");
        inputRead.setAttribute("name", "status");
        inputRead.setAttribute("value", "read");
        form.appendChild(inputRead);

        const readingLabel = document.createElement("label")
        readingLabel.textContent = "Reading"
        readingLabel.setAttribute("for", "reading");
        form.appendChild(readingLabel)

        const inputReading = document.createElement("input")
        inputReading.setAttribute("type", "radio");
        inputReading.setAttribute("id", "reading");
        inputReading.setAttribute("name", "status");
        inputReading.setAttribute("value", "reading");
        form.appendChild(inputReading);

        const unreadLabel = document.createElement("label")
        unreadLabel.textContent = "Unread"
        unreadLabel.setAttribute("for", "unread");
        form.appendChild(unreadLabel)

        const inputUnread = document.createElement("input")
        inputUnread.setAttribute("type", "radio");
        inputUnread.setAttribute("id", "unread");
        inputUnread.setAttribute("name", "status");
        inputUnread.setAttribute("value", "unread");
        form.appendChild(inputUnread);

        const submitButton = document.createElement("input")
        submitButton.setAttribute("type", "button");
        submitButton.setAttribute("id", "submit-book");
        submitButton.setAttribute("value", "Submit book");
        form.appendChild(submitButton);

        let submitBook = document.getElementById("submit-book");

            submitBook.addEventListener("click", (e) => {   
            let title = document.getElementById('title').value;
            let author = document.getElementById('author').value;
            let pages = document.getElementById('pages').value;
            let status = document.querySelector('input[name="status"]:checked').value;
            myLibrary.push(new Book(title, author, pages, status));
            formContainer.removeChild(form)
            displayBooks()
            })
})


function displayBooks() {
    booksContainer.textContent = '';
    for(let i=0; i<myLibrary.length; i++){
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        booksContainer.appendChild(bookCard)

        const bookText = document.createElement("p"); 
        bookText.classList.add("book-text"); 
        bookText.textContent =  myLibrary[i].info();
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

        const statusButton = document.createElement("button");
        statusButton.classList.add("status-button");
        statusButton.textContent = myLibrary[i].status;
        bookCard.appendChild(statusButton);

        (function (index) {
            statusButton.addEventListener('click', () => {
                if (myLibrary[index].status == 'read') {
                    myLibrary[index].status = 'reading';
                    bookText.textContent =  myLibrary[i].info();
                } else if (myLibrary[index].status == 'reading') {
                    myLibrary[index].status = 'unread';
                    bookText.textContent =  myLibrary[i].info();
                } else if (myLibrary[index].status == 'unread') {
                    myLibrary[index].status = 'read';
                    bookText.textContent =  myLibrary[i].info();
                }
                statusButton.textContent = myLibrary[index].status;
            });
        })(i);
    } 
}