class Person {
  constructor(firstName, lastName, birth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birth = birth;
  }

  getAge() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const birthday = new Date(this.birth)
    const birthNow = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
    let age;

    age = today.getFullYear() - birthday.getFullYear();
    if (today < birthNow) {
        age = age - 1
    }
    return age;
}

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Account {
    static transfer(fromAccount, toAccount, amount) {
        fromAccount.withdrawMoney(amount)
        toAccount.addMoney(amount) //?
    }

    constructor(person, balance = 0) {
        this.person = person;
        this.balance = balance;
        this.transactions = [];
    }
    addMoney(amount, description = '') {
        this.balance += amount;
        this.transactions.push({
            timestamp: Date.now(),
            target: 'in',
            amount: amount,
            description: description,
        })
    }
    withdrawMoney(amount, description = '') {
        this.balance -= amount;
        this.transactions.push({
            timestamp: Date.now(),
            target: 'out',
            amount: amount,
            description: description,
        })
        
    }
    getAmount() {
        return this.balance;
    }
    getAccountHistory() {
        return this.transactions;
    }
}

const alex = new Person('Alexey', 'Petrov', '1994-05-22');
const alexAccount = new Account(alex, 1000);
const helen = new Person('Helen', 'Smith', '1990-06-06');
const helenAccount = new Account(helen, 400);

alexAccount.addMoney(1000, 'Зарплата');
const amount = alexAccount.getAmount();
alexAccount.withdrawMoney(amount * 0.1, 'Налоги');
Account.transfer(alexAccount, helenAccount, 100);
helenAccount.getAmount(); //?
alexAccount.getAmount();  //?


alexAccount.getAccountHistory() //?
helenAccount.getAccountHistory() //?