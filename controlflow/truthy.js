const userEmail = []

if(userEmail){
    console.log("Got user email")
} else {
    console.log("User email not found")
}



// falsy values

// false, 0, -0, BigInt 0n, "". null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}


if(userEmail.length == 0){
    console.log("Array is Empty")

}

const emptyObj = {}

if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
val1 = 5??10

val2 = null ?? 5 // null will not be assigned

val3 = undefined ?? 15 // undefined will not be assigned

val4 = null ?? 10 ?? 15 // 10 will be assigned 

console.log(val1)

console.log(val2)

console.log(val3)

console.log(val4)


// Ternary Operator


// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80" ) : console.log("more than 80")