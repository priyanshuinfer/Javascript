/// ES6

// class User {
//     constructor(userName, email, password){
//         this.userName = userName,
//         this.email = email,
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){     
//         return `${this.userName.toUpperCase()}`
//     }
// }


// const createUser = new User("priyanshu","priyanshu@fmail.com","1234")

// console.log(createUser.encryptPassword())
// console.log(createUser.changeUserName())


// Behind the Scenes

function User(userName, email, password){
    this.userName = userName,
    this.email = email,
    this.password = password
}
User.prototype.encryptPassword = function(){  // prototype is the 'inheritance' of javascript
        return `${this.password}abc`
}
User.prototype.encryptPassword = function(){
        return `${this.password}abc`
}

const createAnotherUser = new User("Infer","infer@fmail.com","1134")

console.log(createAnotherUser.encryptPassword())
console.log(createAnotherUser.encryptPassword())



