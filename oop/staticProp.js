class User {
    constructor(userName){
        this.userName = userName
    }

    logMe(){
        console.log(`UserName - ${this.userName}`)
    }

    static createId(){ // static will prevent direct access and will not change further
        return `123`
    }
}


const addUser = new User("Priyanshu")

//console.log(addUser.createId())


class Teacher extends User {
    constructor(userName, email){
        super(userName)
        this.email = email
    }
}


const details = new Teacher('John','john@doe.com')

console.log(details.logMe())