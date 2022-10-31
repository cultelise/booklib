function Book(title, author, pages, read) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read;
  
}
Book.prototype.info = function() { return `${this.title} by ${this.author}. ${this.pages}. ${this.read}.`;}
  ;

let hobbits = new Book("The Hobbit", "JRR Tolkien", "295 pages", "Read")

console.log(hobbits.info())

const book = {
  init: function(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
  }, 
  info: function() { return `${this.title} by ${this.author}. ${this.pages}. ${this.read}.`}
} 


class Book {
  constructor(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
  }
  info() { 
    return `${this.title} by ${this.author}. ${this.pages}. ${this.read}.`
  }

}

const hobbit = new Book("The Hobbit", "JRR Tolkien", "295 pages", "Read");
hobbit.info();
const nineEightFour = new Book()




for (i = 0; i < info.length;) {
  if (info.length == 5) {let title = info.shift();}
  else if (info.length == 4) {let author = info.shift();}
  else if (info.length == 3) {let pages = info.shift();}
  else if (info.length == 2) {let date = info.shift();}
  else if (info.length == 1) {let rating = info.shift();}
  } let bookInfo = new Book(title, author, pages, date, rating);
  return bookInfo;