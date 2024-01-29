const library = [];

let inputData = prompt('Enter book data separate by ";"');
while (inputData) {
    
    const bookData = inputData.split(";");
    const isbn = bookData[0].trim();
    const title = bookData[1].trim();
    const author = bookData[2].trim();
    const year = +bookData[3].trim();
    const existingBook = findBook(library, isbn);

    if (existingBook !== -1) {
        alert("This book is already added. Please add another book.");
    } else {
        const newBook = new Book(isbn, title, author, year);
        library.push(newBook);
    }
    inputData = prompt('Enter book data separate by ";"');
}

printLibrary(library);

function printLibrary(library) {
    const res = document.getElementById('result');
    for (let i = 0; i < library.length; i++) {
        const lI = document.createElement('li');
        lI.textContent = library[i].toString();
        res.appendChild(lI);
    }
}

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN: ${this.isbn}; Title: ${this.title}; Author: ${this.author}; Year: ${this.year}.`;
    }
}