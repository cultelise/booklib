document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", addBookToLibrary);
});

const tableHeader = document.getElementsByName("th"),
  output = document.getElementById("output"),
  tableBody = document.getElementById("tableBody"),
  myLibrary = [],
  rem = document.getElementById("rem");

let bookCounter = 0,
  removalCounter = -1;
/* removalCounter will stand in for whichever remove button is pressed */

class Book {
  constructor(title, author, pages, date, rating, read) {
    (this.title = title),
      (this.author = author),
      (this.pages = pages),
      (this.date = date),
      (this.rating = rating),
      (this.read = read);
  }
  number = bookCounter + 1;
}

function addBookToLibrary() {
  const inputInfo = document.querySelectorAll("input"),
    infoDetails = [];
  for (let detail of inputInfo) {
    if (detail.value === "on") {
      infoDetails.push(detail.checked);
    } else infoDetails.push(detail.value);
  }
  const bookInfo = new Book(...infoDetails);
  myLibrary.push(bookInfo);
  displayLibrary();
  bookCounter++;
}

/* Downshifts row ids in sync with myLibrary.  */
function rowShift() {
  let rows = tableBody.querySelectorAll("tr");
  rows.forEach((row) => {
    if (row.id !== `row${0}`) {
      for (i = 1; i <= rows.length; i++) {
        if (row.id === `row${i}` && removalCounter < i) {
          /* If the number of the button pressed (removalCounter) 
          is higher than the id number of the row in question, 
          we don't want to downshift the row in question's id number. */
          row.id = `row${i - 1}`;
        }
      }
    }
  });
}

/* This function just checks which number row/button/book was removed and alters
the book.number property of each of the other books in myLibrary appropriately. */
function myLibBookNumShift() {
  for (i = 2; i < myLibrary.length + 2; i++) {
    if (
      myLibrary[bookCounter - i].number > 1 &&
      myLibrary[bookCounter - i].number > removalCounter
    ) {
      if (myLibrary[bookCounter - i].checked == undefined) {
        myLibrary[bookCounter - i].checked = true;
        myLibrary[bookCounter - i].number = `${
          myLibrary[bookCounter - i].number - 1
        }`;
      } else if (myLibrary[bookCounter - i].checked == false) {
        myLibrary[bookCounter - i].checked = true;
        myLibrary[bookCounter - i].number = `${
          myLibrary[bookCounter - i].number - 1
        }`;
      }
    }
  }
}

function numberShift() {
  let bookNumbers = tableBody.querySelectorAll(".bookNum");
  bookNumbers.forEach((bookNumber) => {
    for (i = 1; i <= bookNumbers.length + 1; i++) {
      if (bookNumber.textContent === `${i}` && removalCounter < i) {
        bookNumber.textContent = `${i - 1}`;
        myLibBookNumShift();
        break;
      }
    }
  });
  for (i = 2; i < myLibrary.length + 2; i++) {
    myLibrary[bookCounter - i].checked = false;
  }
}

function addRemoveButton() {
  const removeBook = document.createElement("button"),
    buttonWord = document.createTextNode(
      `Remove "${myLibrary[bookCounter]["title"]}"`
    );
  removeBook.id = `book${bookCounter}`;
  removeBook.appendChild(buttonWord);
  rem.appendChild(removeBook);
  removalCounter = -1;
}

function buttonChecker() {
  let buttonsRemove = rem.querySelectorAll("button");
  buttonsRemove.forEach((button) => {
    if (removalCounter !== -1 && button.id !== "book0") {
      /* Checks if a remove button has been clicked yet, then downshifts button ids in sync with myLibrary. */
      for (i = 1; i <= buttonsRemove.length; i++) {
        if (button.id === `book${i}` && removalCounter < i) {
          button.id = `book${i - 1}`;
        }
      }
    }
    if (button.className !== "exists") {
      button.className = "exists";
      button.addEventListener("click", (e) => {
        for (i = 0; i < buttonsRemove.length; i++) {
          if (e.target.id === `book${i}`) {
            myLibrary.splice(i, 1);
            let row = tableBody.querySelector(`#row${i}`);
            removalCounter = i;
            row.remove();
            rowShift();
            buttonChecker();
            numberShift();
            break;
          }
        }
        bookCounter--;
        button.remove();
      });
    }
  });
}

function displayLibrary() {
  for (let book of myLibrary) {
    if (myLibrary[myLibrary.length - 1] === book) {
      const bodyRow = document.createElement("tr");
      bodyRow.id = `row${bookCounter}`;
      for (let detail in book) {
        let node, data;
        switch (detail) {
          case "number":
            data = document.createElement("td");
            data.className = "bookNum";
            node = document.createTextNode(book.number);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case "title":
            data = document.createElement("td");
            node = document.createTextNode(book.title);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case "author":
            data = document.createElement("td");
            node = document.createTextNode(book.author);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case "pages":
            data = document.createElement("td");
            node = document.createTextNode(book.pages);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case "date":
            data = document.createElement("td");
            node = document.createTextNode(book.date);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case "rating":
            data = document.createElement("td");
            node = document.createTextNode(book.rating);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case "read":
            data = document.createElement("td");
            node = document.createTextNode(book.read === true ? "✅" : "❌");
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
        }
      }
      tableBody.appendChild(bodyRow);
      addRemoveButton();
      buttonChecker();
    }
  }
}
