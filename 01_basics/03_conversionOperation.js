let score = "33"
// console.log(typeof score)

// "33" (string) => 33
// "33abc" (string) => NaN
// true => 1; false => 0;
// undefined (undefined) => NaN
// null (object) => 0
// NaN (number) => NaN

const scoreConverted = Number(score)
// console.log(typeof scoreConverted)
// console.log(scoreConverted)

const isLoggedIn = 1
// const booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "" => false
// "mudassir" => true

const rank = 94208
const rankString = String(rank)
console.log(typeof rankString)
console.log(rankString)