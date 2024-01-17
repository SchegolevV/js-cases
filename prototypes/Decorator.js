


class Addition {
    constructor (num) {
    	this.num = num;
    }
    
    add (...nums) {
    	const sum = (a, b) => a + b;
    	return this.num + nums.reduce(sum);
    }
}

function addDecorator(fn) {
    return function(...args) {
        let result = fn.call(this, ...args)
        console.log('called');
        return result;
    }
} 
Addition.prototype.add = addDecorator(Addition.prototype.add)

const five = new Addition(5)



five.add(1,2,3)


