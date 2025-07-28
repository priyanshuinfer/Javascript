const User = {
    _email : 'priyanshu@gmail.com',
    _password : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value

    }
}

const addDet = Object.create(User)
console.log(addDet.email)