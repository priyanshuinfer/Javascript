// date

let myDate = new Date()
// console.log(myDate.toString())

// console.log(myDate.toISOString())

// console.log(myDate.toJSON())

// console.log(myDate.toUTCString())

// console.log(myDate.toDateString())

// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate)

//let myCreatedDate = new Date(2025,0,24)
// let myCreatedDate = new Date(2025,0,24,5,3)
//let myCreatedDate = new Date("2025-07-17")

let myCreatedDate = new Date("07-17-2025")



//console.log(myCreatedDate.toLocaleString())



let myTimeStamp = Date.now()

//console.log(myTimeStamp)

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth() + 1)

console.log(newDate.getDay())


// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday : "long",
    
})