const User = {
    _email: "mudassir@meta.com",
    _password: "pass@meta",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)

console.log(tea.email)
console.log(tea._password)