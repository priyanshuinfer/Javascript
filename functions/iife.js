// Immediately Invokes Function Expression ( I I F E )

(function one(){
console.log('DB CONNECTED')

})(); // Here " ; " is important otherwise it will throw and err

// ***** 0There use to problem due to global scope pollution so in order to prevent/remove pollution IIFE is used ****** 


// ( function two() {
//     console.log(`DB CONNECTED TWO`)
// }) ()   // This will work

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ('priyanshu')   // This will also work // So problem is about the semicolon so it must be used




