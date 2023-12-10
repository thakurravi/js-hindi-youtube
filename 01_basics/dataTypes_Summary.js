// Two types of datatypes in javascript <1>Primitive datatypes and <2>non-PRIMITIVE(refernce type) datatypes 

//Primitive datatypes are seven---->String, Number, Null, boolean, undefined, BigInt, symbol

// const score = 100
// const scoreValue = 100.85
// const isLoggedIn = false
// const outsideTemp = null;
// let userEmail;
// const id = Symbol('123');
// const anotherId = Symbol('123');
// console.log(id===anotherId);
// const bigNumber = 7665469846984648448987854524n
// console.log(typeof bigNumber)
// console.log(typeof outsideTemp)





//Non-Primitive(Reference type)---> Array, Objects, Functions

// const heros = ["Shaktimaan", "Nagraaj", "Doga"] //Array

// let myObj = {
//     name :"Ravi",
//     age :24
// } // Examples of Objects


// const myFunction = function(){
//     console.log("Hello World");
// }



// 1)Primitive: These are call-by-value. The types of primitive data types include String, Number, Boolean, Null, Undefined, Symbol, and BigInt. Note that Symbols uniquely identify variables, even if two variables have the same data and data type. Primitive variables datatype is same but null datatype is object 
// 2) Non-primitive: These are call-by-reference. The types of non-primitive data types are Array, Object, and Function. The data type for these is 'object,' but for functions, they return a data type of 'function,' though they also have an object data type.



// Two types of memory are there  <1>Stack and <2>Heap
// primitive types data uses stack mmemory while non-primitive data uses Heap memory


let myYoutubeName = "RaviKumardot.com"
let anotherName = myYoutubeName
anotherName = "chai aur code"

console.log(myYoutubeName)
console.log(anotherName)


let userOne = {
    email :"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);