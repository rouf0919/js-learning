const accountId = 32421 // not initialize and redeclare
let accountEmail = "rouf0919@gmail.com" // initialize but not redeclare
var accountPassword = "123134"  // can initialize and and redeclare
accountCity = "Lahore"
let accountState;
// accountId = 2  // Not Allowed

accountEmail = "rouf0919@gmail.com"
accountPassword = "12345"
accountCity = "Karachi"
/*
Prefer not to use var
Because of issue in  block scope and function scope
*/
console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])