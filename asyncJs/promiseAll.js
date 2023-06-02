const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 200)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);

function promiseAll(promises) {
  return new Promise((resolve) => {
    if (promises.length === 0) {
      resolve([]);
    }

    let count = 0;
    let arr = [];

    promises.forEach((promise, i) => {
      promise.then((num) => {
        arr[i] = num;
        count++;
        if (count === promises.length) {
          resolve(arr);
        }
      });
    });
  });
}



promiseAll([firstPromise, secondPromise, thirdPromise]) 
// .then(console.log); // [300, 200, 100]

// promiseAll([]); //?
