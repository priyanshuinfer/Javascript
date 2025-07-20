// console.log("P")
// console.log("R")
// console.log("I")
// console.log("Y")
// console.log("A")
// console.log("N")
// console.log("S")
// console.log("H")
// console.log("U")

//tHIS approach is very time taking


// function sayMyName(){
//     console.log("P")
//     console.log("R")
//     console.log("I")
//     console.log("Y")
//     console.log("A")
//     console.log("N")
//     console.log("S")
//     console.log("H")
//     console.log("U")

// }
//sayMyName()


// function addTwoNumbers(number1,number2){ //Parameters
     
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1,number2){ //Parameters
     
    // let result = number1 + number2
    // return result
    // console.log("Priyanshu")
    return number1+number2
}

//addTwoNumbers(2,null) // Arguments // Function called


const result = addTwoNumbers(3, 5)

//console.log("Result : " +result)

function loginUserMessage(username = "joe"){
    if(!username){
        console.log("Please enter a username") // Output : Please enter ...........
        return // undefined


    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("priyanshu")) // Output : priyanshu just logged in

console.log(loginUserMessage()) //Output undefined just logged in