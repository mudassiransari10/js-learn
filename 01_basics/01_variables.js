const accountId = 1
let accountEmail = "mudassir@google.com"
var accountPassword = "password"
accountCity = "Mumbai"
let accountState

// accountId = 2 // not allowed
accountEmail = "mudassir@microsoft.com"
accountPassword = "123456"
accountCity = "Thane"

/*
Prefer not to use "var", because of issues in block scope and functional scope.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
