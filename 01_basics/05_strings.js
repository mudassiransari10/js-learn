const name = "Mudassir"
const repoCount = 22

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Hoirzon-Zero-Dawn')

// console.log(gameName[5])
// console.log(gameName.__proto__)
// console.log(gameName)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('o'))

const subStringOne = gameName.substring(0, 5)
const subStringTwo = gameName.substring(5, 9)
const subStringThree = gameName.substring(10, 14)
// console.log(subStringOne)
// console.log(subStringTwo)
// console.log(subStringThree)

const slicedString = gameName.slice(-14, 9)
// console.log(slicedString)

const newString = "    mudassir    "
console.log(newString)
console.log(newString.trim())

const url = "https://www.mudassir.com/mudassir%20ansari"
console.log(url.replace('%20', '-'))
console.log(url.includes('ansari'))

console.log(gameName.split('-'))