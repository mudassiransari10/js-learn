class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }

    static createId() {
        return `123`
    }
}
const mudassir = new User('mudassir')
// console.log(mudassir.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('Iphone', 'i@apple.com')

// iphone.logMe()
// console.log(iphone.createId())