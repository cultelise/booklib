const tableHeader = document.getElementsByName('th');

const button = document.getElementById('submit');
const myLibrary = [];




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
  console.log(info)
}

function displayLibrary() {
  for (let book of myLibrary) {
    if (myLibrary[myLibrary.length - 1] === book) {
      let tableBody = document.getElementById('bleh');
      let bodyRow = document.createElement('tr');
      for (let detail in book) {
        switch (detail) {
          case 'title':
            console.log(book.detail, book.title)
            let titleData = document.createElement('td');
            let titleNode = document.createTextNode(book.title);
            
            titleData.appendChild(titleNode);
            bodyRow.appendChild(titleData);
            break;
          case 'author':
            let authorData = document.createElement('td');
            let authorNode = document.createTextNode(book.author);
            authorData.appendChild(authorNode);
            bodyRow.appendChild(authorData);
            break;
          case 'pages':
            let pagesData = document.createElement('td');
            let pagesNode = document.createTextNode(book.pages);
            pagesData.appendChild(pagesNode);
            bodyRow.appendChild(pagesData);
            break;
          case 'date':
            let dateData = document.createElement('td');
            let dateNode = document.createTextNode(book.date);
            dateData.appendChild(dateNode);
            bodyRow.appendChild(dateData);
            break;
          case 'rating':
            let ratingData = document.createElement('td');
            let ratingNode = document.createTextNode(book.rating);
            ratingData.appendChild(ratingNode);
            bodyRow.appendChild(ratingData);
            break;
        }
      } tableBody.appendChild(bodyRow);
    }
  }
}



