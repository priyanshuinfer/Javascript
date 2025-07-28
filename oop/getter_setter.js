class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase() // '_' is added to prevent race condition
    }

    set email(value){
        this._email = value
    }


    get password(){
        return `{this._password}priyanshu`
        
    }
    set password(value){
        this._password = value     // this will throw maximum call stack exceeded+   1   sv [\r]
    }
}

const addDetail = new User("priyanshu.com","abc")

console.log(addDetail.email)