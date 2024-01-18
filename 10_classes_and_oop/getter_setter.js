class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}mudassir`
    }

    set password(value) {
        this._password = value
    }
}

const mudassir = new User('mudassir@apple.com', 'apple16')
console.log(mudassir.email)
console.log(mudassir.password)