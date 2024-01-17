// fetch('https://something.com').then().catch().finally()

// In old days people use to make use of Q or Bluebird for implementing promises


// A fetch() promise only rejects when a network error is encountered
// (which is usually when there's a permission issue or similar). A fetch()
// promise does not reject on HTTP (404, etc.). Instead, a then()
// handler must check the Response.ok and/or Response.status properties

const promiseOne = new Promise(function(resolve, reject) {
    // Do async tasks
    // DBcalls, cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task 2 completed')
        resolve()
    }, 1000)
}).then(function() {
    console.log('Async 2 resolved')
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user) {
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "mudassir", password: "12as34df"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(error) {
    console.log(error)
}).finally(function() {
    console.log('The promise four is either resolved or rejected')
})

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true
        if(!error) {
            resolve({username: "mudassir", password: "Pass@1234"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// promiseFive.then
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch(error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https:jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } catch(error) {
//         console.log("E: ", error)
//     }
// }

// getAllUsers()

// const promiseSix = new Promise(function(resolve, reject) {
//     resolve(fetch('https:jsonplaceholder.typicode.com/users').json())
//     reject('ERROR: unable to fetch data')
// })

// promiseSix
// .then(function(user) {
//     console.log(user)
// })
// .catch(function(error) {
//     console.log(error)
// })
// .finally(function() {
//     console.log('Fetch either resolved or rejected')
// })

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => {
    console.log(error)
})