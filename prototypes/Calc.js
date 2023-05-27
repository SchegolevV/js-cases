

class Calc {
    constructor(immutableValue = 0) {
        this.immutableValue = immutableValue;
    }
    add(value) {
        const newValue = this.immutableValue + value;
        return new Calc(newValue);
    } 
    sub(value) {
        const newValue = this.immutableValue - value;
        return new Calc(newValue);
    }
    result() {
        return this.immutableValue;
    }
}

const zero = new Calc()
zero.add(5).sub(3).result()     //?