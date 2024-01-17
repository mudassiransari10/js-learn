const user = {
    username: "mudassir",
    loginCount: 8,
    signedIn : true,

    getUserDetails: function() {
        // console.log('Got user details from database')
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function() {
        console.log(`Welcome: ${this.username}`)
    }

    return this
}

const userOne = new User("Mudassir", 8, true)
const userTwo = new User("ChaiAurCode", 2, true)
// console.log(userOne.constructor)
// console.log(userTwo)

// read about instanceof