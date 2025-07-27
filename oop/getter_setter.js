class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get password(){
        return this.password.toUpperCase()
        
    }
    set password(value){
        this.password = value     // this will throw maximum call stack exceeded
    }
}

const addDetail = new User("priyanshu.com","121")

console.log(addDetail.password)