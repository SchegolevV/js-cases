class AttemptsLimitExceeded extends Error {
  constructor() {
    super("Max attempts limit exceed");
    this.name = "AttemptsLimitExceeded";
  }
}

class NotFoundError extends Error {
  constructor() {
    super("Not found");
    this.name = "NotFoundError";
  }
}

class TemporaryError extends Error {
  constructor() {
    super("TemporaryError");
    this.name = "TemporaryError";
  }
}

function getRepeatableData(getData, key, maxRequestsNumber = Infinity) {
  try {
    return getData(key)
  } 
  catch (error){
    if (error.name === 'TemporaryError') {
        maxRequestsNumber -= 1;
        if (maxRequestsNumber < 1) {
            throw AttemptsLimitExceeded;
        }
        return getRepeatableData(getData, key, maxRequestsNumber) 
    }
  }
}

const getData = (key) => 'hello' + key;
const divideTwo = (key) => key / 2;


// const res = getRepeatableData(getData, null, 3) //?

const res2 = getRepeatableData(divideTwo, 'jdh', 5) //?

