// # Primitive Datatypes (7 types)

// 7 Types: String , Number, Boolean, null, undefined,  Symbol, BigInt

const rank = 94208
const percentile = 98.57

const isAlive = true
const insideTemp = null
let userEmail;

const id1 = Symbol("123")
const id2 = Symbol("123")

console.log(id1 === id2)

const pi = 314159265358979323846n

// # Reference Types (Non-Primitives)

// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Mudassir",
    age: 22
}

const myFunction = function() {
    console.log("Hello World")
}
myFunction()

console.log(typeof myObj)