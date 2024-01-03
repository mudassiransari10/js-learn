// if
const isUserLoggedIn = true
const temperature = 73

// if (temperature === 33) {
//     console.log(`temperature less than 50`)
// } else {
//     console.log(`temperature greater than 50`)
// }

// console.log(`Executed`)

//COMPARISON OPERATORS: < (less than), > (greater than), <= (less than equal to), >= (greater than equal to), == (only value checking), != (negation of ==), === (value + datatype checking), !== (negation of ===)

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }

// console.log(`User power: ${power}`)

const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");// an example of bad code

// if (balance < 500) {
//     console.log(`less than 500`)
// } else if (balance < 750) {
//     console.log(`less than 750`)
// } else if (balance < 900) {
//     console.log(`less than 900`)
// } else {
//     console.log(`less than 1200`)
// }

const userLoggedIn = true
const debitCard = true
const isLoggedInFromGoogle = false
const isLoggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log(`Allow to buy course`)
}

if (isLoggedInFromEmail || isLoggedInFromGoogle) {
    console.log(`User Logged in`)
}