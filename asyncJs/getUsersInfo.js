let USERS_INFO = {
  id5: { name: "Elon5" },
  id1: { name: "Alex", age: 70 },
  id2: { name: "Elon2" },
  id7: { name: "Elon7" },
  id4: { name: "Elon4" },
  id3: { name: "Elon3" },
  id6: { name: "Elon6" },
};
let IDS = ["id1", "id7", "id3"];
// let IDS = Object.keys(USERS_INFO);

function getUsersIds(callback) {
  setTimeout(() => callback(IDS), Math.random() * 500);
}

function getUserInfo(id, callback) {
  setTimeout(() => callback(USERS_INFO[id]), Math.random() * 500);
}

// getUserInfo('id2', (userInfo) => {
//   console.log(userInfo); // { name: 'Alex', age: 70 }
// });

// getUsersIds((ids) => {
//   console.log(ids); // ['id2', 'id6']
// });

function getUsersInfo(onLoad) {
  getUsersIds((ids) => {
    let lengthId = ids.length;
    let count = 0;
    let arr = [];
    ids.forEach((id, index) => {
      getUserInfo(id, (person) => {
        arr[index] = person;
        count++;
        if (count === lengthId) {
          onLoad(arr);
        }
      });
    });
  });
}
let arg1 = (users) => {
  console.log(users); // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]
};
getUsersInfo(arg1);
