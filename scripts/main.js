document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('mousedown', addBookToLibrary);
})


const tableHeader = document.getElementsByName('th'),
      output = document.getElementById('output'),
      tableBody = document.getElementById('tableBody'),
      myLibrary = [],
      rem = document.getElementById('rem');

let counter = 0;

class Book {
  constructor(title, author, pages, date, rating, bookNumber = counter) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.date = date,
    this.rating = rating;
    this.bookNumber = counter;
  } 
}

function addBookToLibrary() {
  const inputInfo = document.querySelectorAll('input'), 
        infoDetails = [];
  for (let detail of inputInfo) {
    infoDetails.push(detail.value);
  };
  const bookInfo = new Book(...infoDetails);
  myLibrary.push(bookInfo);
  displayLibrary();
  counter++;
}

function rowShift() {
  let rows = tableBody.querySelectorAll('tr');
  rows.forEach(row => {
    if (row.id !== `row${0}`) {
      for (i = 1; i <= rows.length; i++) {
        if (row.id === `row${i}` && count < i) {
          row.id = `row${i - 1}`;
        }
      }
    }
  })
}

function removeButton() {
  const removeBook = document.createElement('button'), 
        buttonWord = document.createTextNode(`Remove "${myLibrary[counter]['title']}"`);
  removeBook.id = `book${counter}`;
  removeBook.appendChild(buttonWord);
  rem.appendChild(removeBook);
}
let count = -1;

function buttonChecker() {
  let buttonsRemove = rem.querySelectorAll('button');
  buttonsRemove.forEach(button => {
    if ( count !== -1 && button.id !== 'book0') {
      for (i = 1; i <= buttonsRemove.length; i++) {
        if (button.id === `book${i}`  && count < i) {
          button.id = `book${i - 1}`;
        }
      }
    };
    if (button.className !== 'exists') {
      button.className = 'exists';
      button.addEventListener('click', (e) => {
        for (i = 0; i < buttonsRemove.length; i++) {
          if (e.target.id === `book${i}`) {
            myLibrary.splice(i, 1);
            let row = tableBody.querySelector(`#row${i}`);
            row.remove();
            count = i;
            console.log(count);
            rowShift();
            buttonChecker();
            break;
          }}
        counter--;
        button.remove();
      }); 
      console.log(count)
    }
  })
}

function displayLibrary() {
  for (let book of myLibrary) {
    if (myLibrary[myLibrary.length - 1] === book) {
      const bodyRow = document.createElement('tr');
      bodyRow.id = `row${counter}`;
      for (let detail in book) {
        let node, data;
        switch (detail) {
          case 'title':
            data = document.createElement('td');
            node = document.createTextNode(book.title);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case 'author':
            data = document.createElement('td');
            node = document.createTextNode(book.author);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case 'pages':
            data = document.createElement('td');
            node = document.createTextNode(book.pages);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case 'date':
            data = document.createElement('td');
            node = document.createTextNode(book.date);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
          case 'rating':
            data = document.createElement('td');
            node = document.createTextNode(book.rating);
            data.appendChild(node);
            bodyRow.appendChild(data);
            break;
        }
      } tableBody.appendChild(bodyRow);
        removeButton();
        buttonChecker();
    }
  }
}



