// for

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log(`${element} is best number`)
    }
    // console.log(element)
}
// console.log(element)

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop ${j} & inner loop ${i}`)
        // console.log(i + ' * ' + j + " = " + i*j);
    }   
}

let myArr = ["Flash", "Batman", "Superman"]
// console.log(myArr.length)
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index]
    // console.log(element)
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`${index} detected`)
        break
    }
    // console.log(`Value of i is ${index}`)
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`${index} detected`)
        continue
    }
    // console.log(`Value of i is ${index}`)
    
}