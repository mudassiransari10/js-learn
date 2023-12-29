const marvel_heroes = ["Iron Man", "Thor", "Captain America", "Hulk"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// Using PUSH()
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[4])

// Using CONCAT{}
// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)
// console.log(allHeroes)

// Using SPREAD OPERATOR
const allHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(allHeroes)

const arr1 = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]] ]
const realArr1 = arr1.flat(1)
// console.log(arr1)
// console.log(realArr1)

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "Mudassir"})) // careful when transforming object to array

let myObj = {
    name: "Mudassir",
    zipCode: 401107
}
let score1 = 80
let score2 = 76
let score3 = 73

// console.log(Array.of(score1, score2, score3, myObj)) // [ 80, 76, 73, { name: 'Mudassir', zipCode: 401107 } ]
// console.log(Array.of(score1, score2, score3, myObj.zipCode)) // [ 80, 76, 73, 401107 ]