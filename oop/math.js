const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")


console.log(descriptor)



const myNewObj = {
    name : 'Math Function',
    price : 3142,
    isAvailable : true,



    orderNewObj : function(){
        console("Code will be blasted hence no operations");
    }
}
console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"))

Object.defineProperty(myNewObj,'name',{
//     writable : false,
       enumerable : true
})

// console.log(Object.getOwnPropertyDescriptor(myNewObj, "name"))


for (let [key, value] of Object.entries(myNewObj)) {  // 'myNewObj' is an object so it can be directly iterated for that we need to use Object.entries(myNewObj)
    if(typeof value != 'function'){
        console.log(`${key} : ${value}`)
    }
}


