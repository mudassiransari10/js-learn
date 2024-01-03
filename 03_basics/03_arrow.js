const user = {
    username: "mudassir",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sameer"
// user.welcomeMessage()

// console.log(this) // returns an EMPTY object when run in *browser* returns WINDOW object

// function func() {
//     let username = "mudassir"
//     console.log(this) // returns GLOBAL object
// }
// func()

// function func() {
//     let username = "mudassir"
//     console.log(this.username) // returns undefined
// }
// func()

// const func = function() {
//     let username = "mudassir"
//     console.log(this.username) // returns undefined
// }
// func()

// const func = () => {
//     let username = "mudassir"
//     console.log(this) // returns an EMPTY object
// }
// func()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // EXPLICIT return
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) // IMPLICIT return

// const addTwo = (num1, num2) => ({name: "mudassir"}) // return object using arrow function

// console.log(addTwo(2, 3))
