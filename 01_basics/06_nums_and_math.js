const score = 80
// console.log(score)

const bal = new Number(1000)

// console.log(bal)
// console.log(bal.toString().length)
// console.log(bal.toFixed(2))

const plankConstant = 6.62607015
// console.log(plankConstant.toPrecision(3))

const hundreds = 100000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN')) // Indian locale

// +++++++++++++++++++++++++Maths+++++++++++++++++++++++++

// console.log(Math) // try it on browser
// console.log(Math.abs(-14))
// console.log(Math.round(3.14))
// console.log(Math.ceil(6.626))
// console.log(Math.floor(6.022))
// console.log(Math.min(2, 5, 7, 13, 74, 98, -1))
// console.log(Math.max(-3, 0, 23, 5, 8, 1))

console.log(Math.random())
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/*
Trick to generate random number between some numbers

const min = MIN_NUMBER
const max = MAX_NUMBER

To avoid getting a zero output as a random number, we use: (max - min + 1)
Formula: Math.floor(Math.random() * (max - min + 1) + min )

*/