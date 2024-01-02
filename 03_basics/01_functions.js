function sayMyName() {
    console.log("M")
    console.log("U")
    console.log("D")
    console.log("A")
    console.log("S")
    console.log("S")
    console.log("I")
    console.log("R")
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    // let result =  number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(3, 5)
// console.log(`Result: ${result}`)

function loginUserMeassage(username = "Sam") {
    if(!username) {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMeassage("mudassir"))