const tableHeader = document.getElementsByName('th');
const myLibrary = [];
let output = document.getElementById('output');



function Book(title, author, pages, date, rating) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.date = date,
  this.rating = rating;
}


function addBookToLibrary() {
  let info = document.querySelector('#book').value.split(' ');
  let bookInfo = new Book(info[0], info[1], info[2], info[3], info[4])
  myLibrary.push(bookInfo);
  displayLibrary();
}

function displayLibrary() {
  for (let book of myLibrary) {
    if (myLibrary[myLibrary.length - 1] === book) {
      let tableBody = document.getElementById('bleh'),
          bodyRow = document.createElement('tr');
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
        let removeBook = document.createElement('button');
        let buttonWord = document.createTextNode("Remove");
        removeBook.appendChild(buttonWord);
        console.log(output, removeBook)
        output.appendChild(removeBook);
        output.style.display = 'flex';
    }
  }
}



