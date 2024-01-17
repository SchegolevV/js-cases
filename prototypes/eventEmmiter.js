class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    if (!this.events[eventName].includes(callback)) {
      this.events[eventName].push(callback);
    }
  }

  off(eventName, callback) {
    this.events[eventName] = this.events[eventName].filter(
      (eventCallback) => eventCallback !== callback
    );
  }

  once(eventName, callback) {
    const self = this;
    const onceFunc = function (...args) {
      self.off(eventName, onceFunc);
      callback.apply(self, args);
    };
    this.on(eventName, onceFunc);
  }

  emit(eventName, ...args) {
    let event = this.events[eventName];
    if (event) {
      event.forEach((callback) => callback(...args));
    }
  }
}

class BroadcastEventEmitter extends EventEmitter {
  emit(eventName, ...args) {
    if (eventName === "*") {
      for (let event in this.events) {
        this.events[event].forEach((callback) => callback.apply(this, args))
      }
    }
  }
}

const ee = new EventEmitter();

let sum = () => "sum";

let multTwo = (a) => a * 2;
let logData = (data) => console.log(data);

ee.on("click", sum);
ee.on("click", logData);
ee.on("click", multTwo);

ee.on("push", multTwo);

ee.on("push", sum);

ee.once("push", sum);

ee.emit("push", sum);
ee.emit("push", sum);

ee.off("click", sum);
ee.off("push", multTwo);

ee.events; //?


