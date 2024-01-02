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

// console.log(loginUserMeassage("mudassir"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 300, 100, 500))

const user = {
    productname: "back cover",
    prices: 1800
}

function handleObject(anyobject) {
    console.log(`Prodcut name is ${anyobject.productname}, and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     productname: "screen protector",
//     price: 2200
// })

const myNewArrray = [400, 200, 300, 700]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArrray))
// console.log(returnSecondValue([400, 200, 300, 700]))