const score = 400
console.log(score)

const balance = new Number(600)
console.log(balance)

//To String
console.log(balance.toString())
console.log(typeof(balance))

console.log(balance.toString().length)
console.log(balance.toFixed(2))

// Precision Value
const otherNumebr = 123.8966
console.log(otherNumebr.toPrecision(3))

//US Standanart
const hundred = 1000000000
console.log(hundred.toLocaleString())
console.log(hundred.toLocaleString('en-IN'))


/********Math******* */
console.log(Math)

//Negative value to positive
console.log(Math.abs(-5))

// RoundOf
console.log(Math.round(4.5))

// RoundOf Ciel value mean to round max/ceil value
console.log(Math.ceil(4.5))

// RoundOf Ciel value mean to round lowest.floor value
console.log(Math.floor(4.5))

// Math.min to find max value in an array
console.log(Math.max(4,3,2,1))
// Math.min to find min value in an array
console.log(Math.min(4,3,2,1))


//values should be 0 and 1
console.log(Math.random())

console.log(Math.random()*10)
console.log(Math.random()*10 + 1)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + 1)

