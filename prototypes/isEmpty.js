function isEmpty(obj) {
  return Object.values(obj).length === 0 ? true : false;
}

function isEmptyWithProtos(obj) {
  if (!isEmpty(obj)) {
    return false;
  }
  let proto = Object.getPrototypeOf(obj);
  if (proto) {
    return isEmpty(proto);
  }
  return true;
}

// function User(name, age, male) {
//   this.name = name;
//   this.age = age;
//   this.male = male;
// }
// User.prototype.greet = function () {
//   console.log(`Hi, ${this.name || "user"}`);
// };
// let user1 = new User("ivan", 24, "male");
// let user2 = new User("pavel", 27, "male");

// function Auto() {}

// function Wolf() {}

// Wolf.prototype.run = function () {
//   console.log("run");
// };

// function Tree() {}
// delete Tree.prototype;
// Tree.prototype = null;

// const bereza = new Tree();

// let wolll = new Wolf();

// let bmw = new Auto();

// console.log(isEmptyWithProtos(user1));
// console.log(isEmptyWithProtos(user2));
// console.log(isEmptyWithProtos({}));
// console.log(isEmptyWithProtos({ name: 'p'}));
// console.log(isEmptyWithProtos({ name: 'p'}));
// console.log(isEmptyWithProtos(bmw))
// console.log(isEmptyWithProtos(wolll))
// console.log(isEmptyWithProtos(bereza));


// function Message(text, user, date) {
//     this.date = date;
//     this.text = text;
//     this.user = user;
// }

// const unread = new Message(
//     'whasaaap', 
//     {
//     name: 'ivan',
//     age: 20,
//     country: "Russia",
//     skill: 'singing'
//     },
//     new Date().getFullYear()
//  )

// console.log(unread)