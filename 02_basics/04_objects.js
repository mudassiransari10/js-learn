// const tinderUser = new Object() // signleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sameer"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstName: "Mudassir",
            lastName: "Ansari"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2, obj3}

// const obj4 = Object.assign(obj1, obj2, obj3) // target object is obj1, obj1 and obj4 are same

// const obj4 = Object.assign({}, obj1, obj2, obj3) // target object is {}, obj1 and obj4 are not same
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj1)
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "m@google.com"
    },
    {
        id: 2,
        email: "a@google.com"
    },
    {
        id: 3,
        email: "k@google.com"
    }
]

// console.log(`${users[0].id} ${users[0].email}`)
// console.log(`${users[1].id} ${users[1].email}`)
// console.log(`${users[2].id} ${users[2].email}`)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(instructor)

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]