const user = {
    username : "priyanshu",
    price : "99",
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`) // 'this' keyword is used to refer the current context 

        //console.log(this);
    }
}

// user.welcomeMessage() // Output : priyanshu , welcome to website

// user.username = "joe"
// user.welcomeMessage() // Output : joe , welcome to website

// console.log(this);


// function one(){
//     let username = "priyanshu"
//     console.log(this.username) // Output : undefined
// }


// one()


const one = () => {
    let username = "priyanshu"
    // console.log(this.username) //  Output : undefined
    console.log(this) // Output : {}
}

one()


const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(1,2))


// Same implementation can be done using **IMPLICIT RETURN**



 const addThree = (num1,num2) => num1 + num2 // Output : 4

//How to return a object


console.log(addThree(1,3))


const addFour = (num1, num2) => ({username : "priyanshu"}) // Values should be wrapped with paranthesis else it will return

console.log(addFour(2,4))



// const myArray = [2, 5, 7, 9, 10]

// myArray.forEach()i