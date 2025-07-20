//const instaUser = new Object()

const instaUser={}

instaUser.id= "123abc"
instaUser.name= "joe"
instaUser.isLoggedIn= false


console.log(instaUser)


const regularUser = {
    email : "joe@gmail.com",
    fullname : { 
        userfullname : {
            firstname : "joe",
            lastname : "doe"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1= {1: "a", 2: "b"}
const obj2= {3: "a", 4: "b"}
const obj3= {5: "a", 6: "b"}

//const obj4 = Object.assign({},obj1,obj2,obj3)


const obj4 = {...obj1,...obj2,...obj3}

console.log(obj4)

console.log(instaUser)

console.log(Object.keys(instaUser))
console.log(Object.values(instaUser))
console.log(Object.entries(instaUser))


console.log(instaUser.hasOwnProperty('isLoggedIn'))


