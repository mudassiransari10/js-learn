class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai", 'chai@meta.com', '123')

chai.addCourse()
chai.logMe()

const tea = new User('IcedTea')
tea.logMe()

console.log(chai instanceof Teacher)
console.log(chai instanceof User)