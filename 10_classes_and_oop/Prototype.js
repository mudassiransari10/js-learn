// let myName = "mudassir     "
// let myChannel = "MudassirAnsari      "

// console.log(myName.truelength)

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy powr is ${this.spiderman}`)
    }
}

Object.prototype.mudassir = function() {
    console.log(`mudassir is present in all objects`)
}

Array.prototype.arrayMudassir = function() {
    console.log('Mudassir says hello from array')
}
// heroPower.mudassir()

// myHeroes.mudassir()
// myHeroes.arrayMudassir()

// heroPower.arrayMudassir()

// inheritance

const User = {
    username: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "chaiaurcode      "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is ${this.trim().length}`);
}

anotherUsername.trueLength()
"mudassir".trueLength()
"icedTea".trueLength()