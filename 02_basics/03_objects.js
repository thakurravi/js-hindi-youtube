// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "Ravi",
    "full name": "Ravi Kumar",
    [mySym]: "myKey1",
    age: 18,
    location: "Patna",
    email: "ravi@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym]);


jsUser.email = "Ravi@chatgpt.com"
// Object.freeze(jsUser);
jsUser.email = "ravi@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Js User");
}
jsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());