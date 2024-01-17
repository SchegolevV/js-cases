




class Book {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
        this.readers = [];
    }
    addReader(name) {
        this.readers.push(name);
        const stamp = Date.now();
        const time = new Date(stamp);
        console.log(`add new reader ${name} at ${time}`)
    }
}

const book1 = new Book('valya', 'me', 2020)

const book2 = new Book('ilia', 'hi', 1998)

const book3 = new Book('Masha', 'About', 1998)

book1.rait = 'four';

book1.addReader('misha')
book1.addReader('kirill')


class PhoneBook extends Book {
    constructor(name, author, year, battery) {
        super(name, author, year)
        this.battery = 0;
    }
    Charging() {
        if (this.battery >= 3400) {
            console.log('max charge')
        } else {
        this.battery += 500;
        console.log(`battery charged in ${this.battery}/ 3400`)}
    }
}


const phoneBook = new PhoneBook ('mans', 'valya', 2001, 0)

phoneBook.Charging()
phoneBook.Charging()

console.log(phoneBook)

