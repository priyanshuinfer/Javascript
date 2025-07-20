// let a = 10
// const b = 20
// var c = 30


//var c = 300
let a = 200
if (true){  // Block Scope
    let a =10
    const b =20
    //var c =30

    //console.log(a)
}

// Global Scope

// console.log(a) // 'let' will throw an err
// console.log(b) // 'const' wil throw an err
//console.log(c) // But 'VAR' will print 


function one(){
    const username = "priyanshu"

    function two(){
        const website = "youtube"
        //console.log(username)
    }
    // console.log(website);

    two()
}
one()

if(true) {
    const username = "priyanshu"
    if(username === "priyanshu " ){
        const website = "youtube"
        console.log(username + website)
    }
    // console.log(website) // This will throw err as the scope was within the loop only
}

//console.log(username)// This will throw err as the scope was within the loop only


/// ******** I N T E R E S T I N G ***********
console.log(addone(4))

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}

