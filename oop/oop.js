const user = {
    username : "priyanshu",
    loginCount : 8,
    signedIn:true,

    getUserDetails:  function(){
        //console.log("Got user details from database")
        //console.log(`Username: ${this.username}`)
        console.log(this) // Output : {
                                            // username: 'priyanshu',
                                            // loginCount: 8,
                                            // signedIn: true,
                                            // getUserDetails: [Function: getUserDetails]
                                    //}
    }
}
console.log(user.username)
//console.log(user.getUserDetails())
console.log(this) // Output : {}


// const user2 = {
//     username: "priyanshu",
//     loginCount:8,
//     signedIn:true,

//     getUserDetails: function(){
//         console.log(this)
//     }

// }


//const promiseOne = new Promise()  // 'new' keyword is the constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    
    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this

}

const userOne = new User("Priyanshu",23,true)
const userTwo = new User("JavaScript",19,false)
console.log(userOne.constructor)
//console.log(userTwo)