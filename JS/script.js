// Book Class: represents a book

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI Class: handle UI task

class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "Book One",
        author: "John Doe",
        isbn: "3434434",
      },
      {
        title: "Book two",
        author: "Jane Doe",
        isbn: "323232",
      },
    ];

    const books = storedBooks;

    books.forEach((book) => UI.addbookToList(book));
  }

  static addbookToList(book) {
    const list = document.querySelector("#book-list");

    const row = document.createElement("tr");
    row.innerHTML = ` 
        <td>${book.title} </td>
        <td>${book.author} </td>
        <td>${book.isbn} </td>
        <td>
        <a href = "#" class= "btn btn-danger btn-sm delete">X</a>
        </td>
    `;

    list.appendChild(row);
  }
  static clearFields() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#isbn").value = "";
  }
}

// Storage Class: handles storage

// Event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event: add a book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  // Prevent actual submit
  e.preventDefault();

  //Get form values
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Istantiate book
  const book = new Book(title, author, isbn);
  console.log(book);

  // Add Book to UI
  UI.addbookToList(book);

  // Clear field
  UI.clearFields();
});

// Event: remove a book
