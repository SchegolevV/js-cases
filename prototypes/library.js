function Book(name, author, year) {
   this.name = name;
   this.author = author;
   this.year = year;
   this.reader = null;
}
Book.prototype.changeBookName = function(newBookName) {
    this.name = newBookName;
    return true;
}
Book.prototype.changeAuthorName = function(newAuthorName) {
    this.author = newAuthorName;
    return true;
}
Book.prototype.isAvailable = function() {
   return this.reader === null ? true : false; 
}
Book.prototype.takeBook = function(readerName) {
    if (this.reader === null) {
        this.reader = readerName;
        return true;
    } else {
        return false;
    }
}
Book.prototype.returnBook = function() {
    if (!this.isAvailable()) {
        this.reader = null;
        return true
    } else {
        return false;
    }
}
Book.prototype.getCurrentReader = function() {
    return this.reader;
}

const book1 = new Book('1984', 'Jorge Orwell', 1914)

book1.changeBookName('Lolita')
book1.changeAuthorName('Nabokov')

book1.takeBook('Valek')

book1.returnBook()

console.log(book1.name)
console.log(book1.author)
console.log(book1.isAvailable())
console.log(book1.getCurrentReader())

