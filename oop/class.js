function setUserName(username){
    this.username = username;
    console.log("called");
}

function createUser(username, email, password){
    setUserName.call(this, username); // this for indicating the current context
    this.email = email;
    this.password = password;
}
const javascript = new createUser("priyanshu", "priyanshu@gmail.com", "1234");
console.log(javascript);
