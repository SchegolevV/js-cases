const firstPromise = new Promise((resolve) =>
  setTimeout(() => resolve(300), 300)
);

const secondPromise = new Promise((resolve) =>
  setTimeout(() => resolve(200), 400)
);

const thirdPromise = new Promise((resolve) =>
  setTimeout(() => resolve(100), 100)
);



function promiseRace(promises) {
    return new Promise ((resolve, reject) => {
        promises.forEach((current) => {
            current.then((num) => {
                resolve(num)
            }).catch((err) => reject(new Error(err.message)))
        })
    })
}

promiseRace([thirdPromise, secondPromise,firstPromise,]); //?