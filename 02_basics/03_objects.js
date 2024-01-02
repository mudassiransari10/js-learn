// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Mudassir",
    "full name": "Mudassir Ansari",
    [mySym]: "myKey1",
    age: 22,
    location: "Mumbai",
    email: "mudassir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Friday", "Monday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "mudassir@meta.com"
// console.log(jsUser.email)
// Object.freeze(jsUser)
jsUser.email = "mudassir@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log(`Hello from Js user`)
}

jsUser.greetingTwo = function(){
    console.log(`Hello from Js user, ${jsUser.name}`)
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())