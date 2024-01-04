const userEmail = []

// if (userEmail) {
//     console.log(`Got user email`)
// } else {
//     console.log(`Didn't get user email`)
// }

// flasy values: 

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values:

// "0", 'false', " ", [] <- (empty array), {} <- (empty object), function() {} <- (empty function)

// if(userEmail.length === 0) {
//     console.log(`Array is empty`)
// }

const emptyObj = {}

// if(Object.keys(emptyObj).length === 0) {
//     console.log(`Object is empty`)
// }

// false == 0 // true

// false = '' // true

// 0 == '' // true

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 14
val1 = null ?? 10 ?? 15

// console.log(val1);

// Ternary Operator

// condition ? true_statement : false_statement

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log(`less than 80`) : console.log(`not less than 80`)