const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor)
// console.log(Math.PI)

const chai = {
    name: 'Red Ginger Tea',
    price: 250,
    isAvailable: true,

    orderChai: function() {
        console.log("Chai nahi bani")
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// for (let [key, value] of Object.entries(chai)) {
//     if(typeof value != 'function') {
//         console.log(`${key} : ${value}`)
//     }
// }

Object.defineProperty(chai, "name", {
    // writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

for (let [key, value] of Object.entries(chai)) {
    if(typeof value != 'function') {
        console.log(`${key} : ${value}`)
    }
}