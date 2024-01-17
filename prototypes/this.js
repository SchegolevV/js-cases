function hello() {
    console.log('hello', this)
}

const person = {
    name: 'valya',
    age: 24,
    sayHello: hello,
    logInfo: function(job, phone) {
        console.group(`${this.name} info`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`job is ${job}`)
        console.log(`phone is ${phone}`)
        console.groupEnd()
    }
}

// person.logInfo()

const lena = {
    name: 'elena',
    age: 23
}

// person.logInfo.bind(lena, 'Frontend', '89283982398')()
// person.logInfo.call(lena, 'Frontend', '89283982398')
// person.logInfo.apply(lena, ['Frontend', '89283982398'])


const array = [1, 2 , 3, 4, 5 ]

// function multBy(arr, n) {
//     return arr.map(function(i) {
//         return i * n;
//     })
// }


Array.prototype.multBy = function(n) {
   return this.map(function(i) {
    return i * n;
   })
}

console.log(array.multBy(5))