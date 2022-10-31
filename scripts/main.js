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
  const info = document.querySelector('#book').value.split(' '),
    bookInfo = new Book(info[0], info[1], info[2], info[3], info[4]);
  myLibrary.push(bookInfo);
  displayLibrary();
  counter++;
}

function removeButton() {
  const removeBook = document.createElement('button'), 
        buttonWord = document.createTextNode("Remove Book");
  removeBook.id = `book${counter}`;
  removeBook.appendChild(buttonWord);
  rem.appendChild(removeBook);
}

function buttonChecker() {
  let buttonsRem = rem.querySelectorAll('button');
  buttonsRem.forEach(button => {
    if (button.className !== 'present') {
      button.className = 'present';
      button.addEventListener('click', (e) => {
        for (i = 0; i < buttonsRem.length; i++) {
          if (e.target.id === `book${i}`) {
            myLibrary.splice(i, 1, '');
            let row = tableBody.querySelector(`#row${i}`);
            row.remove();
            break;
          }}
        counter--;
        button.remove();
      })
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



