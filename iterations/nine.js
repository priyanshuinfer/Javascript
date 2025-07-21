const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, curVal) {
    console.log(`acc: ${acc} and curval: ${curVal}`)
    return acc + curVal
},0)


const newTotal = myNums.reduce( (acc,curVal) => acc+curVal,0)

console.log(newTotal)


const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 3999
    },
    {
        itemName : "java course",

        price : 4999
    }
]
const price =
shoppingCart.reduce( (acc,item) => acc + item.price,0)


console.log(price)