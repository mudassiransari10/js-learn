// array

const myArr = [0, 1, 2, 3, 4, 5]
const heroes = ["Aquaman", "Batman", "Flash", "Superman", "Wonderwoman"]
const myArr2 = new Array(0, 1, 2, 3, 4, 5)

// console.log(myArr[2])

// Array Methods
// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(7))
// console.log(myArr.indexOf(3))

const newArr = myArr.join()

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr) // string

// slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1, 3)

console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)

/*
slice(a, b): retrieve the values from index a to b(excluding charAt(b))

splice(a, b): retrieve the values from arrays indexing a to b(including charAt(b)) and deletes those values from the original array 
*/