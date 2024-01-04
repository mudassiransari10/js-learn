const myNums = [1, 2, 3]

// reduce() to calculate total value of cart

// const myTotal = myNums.reduce( function(acc, currVal) {
//     console.log(`Accumulator: ${acc}, currentValue: ${currVal}`)
//     return acc + currVal
// }, 0)

// const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(myTotal)

const shoppingCart = [
    { courseName: 'js', price: 6999},
    { courseName: 'mobile development', price: 8999},
    { courseName: 'data science', price: 13999},
    { courseName: 'python', price: 4999},
    { courseName: 'java', price: 14999}
]

const totalPrice = shoppingCart.reduce( (acc, product) => acc + product.price, 0)

// console.log(`Total Cart price: ${totalPrice}`)