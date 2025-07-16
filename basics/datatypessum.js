//primitive data type

// 7 types : string ,number , boolean ,null ,undefined ,symbol ,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outside = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)

//const bigNumber = 322828282181818844848n
// reference type (non - primitive)

// array,objects ,functions

const heros = ["shaktiman","marvel","hanumanji"]
let myObj = {
    name : "priyanshu",
    age : 22,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myObj)

// Stack(Primitive), Heap (Non - Primitive)

let myName = "Priyanshu Chaturvedi"

let anothername = myName
anothername = "priyanshu infer"
console.log(myName);
console.log(anothername);

let userOne = {
    email : "priyanshu@gmail.com", 
    upi : "priyanshu@oksbi"
}
let userTwo = userOne

userTwo.email = "priyanshu11@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);