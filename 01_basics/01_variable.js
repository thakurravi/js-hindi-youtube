const accountId = 144553
let accountEmail = "ravi@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 this is not allowed because it is const

accountEmail = "hchc@gmail.com"
accountPassword = "121212"
accountCity = "bengal"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
 /*
Prefer not to use var 
because of issue in block scope and functional scope
 */