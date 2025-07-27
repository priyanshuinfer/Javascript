class User {
    constructor(userName){
        this.userName = userName
    }
    logMe(){
        console.log(`Username : ${this.userName}`)
    }
}

class Teacher extends User{
    constructor(userName, email, password){
        super(userName)
        this.email = email,
        this.password = password
    }

    addCourse(){
        console.log(`New Course was added by - ${this.userName}`)
    }
}


const add = new Teacher("Joe Doe","joe@teacher.com","1234")

add.addCourse()

const addNew = new User("Maaza")

addNew.logMe()

console.log(add instanceof Teacher)