// singleton


// object literals
const mySymbol = Symbol("key1")



const JsUser ={
    name : "Priyanshu",
    "full name" : "priyanshu chaturvedi",
    [mySymbol] : "mykey1",
    age : 23,
    location : "Pune",
    email : "priyanshu@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}


//console.log(JsUser.email)

//console.log(JsUser[email]) // X not a way to print email like this

//console.log(JsUser["email"]) // ✔ way to print email
//console.log(JsUser["full name"])

//console.log(JsUser[mySymbol])


JsUser.email = "priyanshu@google.com"
//Object.freeze(JsUser)
JsUser.email = "priyanshu@company.com"
//console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello JS User")


}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

    


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())