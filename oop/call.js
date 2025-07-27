function setUserName(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){
    setUserName(username)

    this.email = email
    this.password = password


}

const javascript = new createUser("priyanshu","priyanshu!gmail.com","1234")


console.log(javascript)