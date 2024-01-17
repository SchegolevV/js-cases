class ExecutionError extends Error {
  constructor(arg, stack) {
    super();
    this.stack = stack;
    this.arg = arg;
  }
  getArgData() {
    return this.arg;
  }
}

function applyFn(dataArr, callback) {
    let errors = [];
    let succeeded = [];

    dataArr.forEach((dataElement) => {
        try {
            succeeded.push(callback(dataElement));
        }
        catch (error) {
            error = new ExecutionError(dataElement, error.stack)
            errors.push(error)
        }
    })
    return {
        errors,
        succeeded,
    }
}


applyFn([1, 2, 3], (arg) => arg + 1); //?

const dataArr = ["{{}", '{"login":"login","password":"password"}', "{]"];
const callback = JSON.parse;

const { succeeded, errors } = applyFn(dataArr, callback); //?
