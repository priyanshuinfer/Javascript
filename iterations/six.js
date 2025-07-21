// const coding =["js", "ruby", "java", "python", "cpp"]



// const values = coding.forEach( (item) => {
//     console.log(item)
// })

// console.log(values)


const myNums = [1, 2, 3, 4, 5, 7, 8, 9, 10]

const newNums = myNums.filter( (nums) => {
    return nums > 4
} )


const anyNums = []

myNums.forEach( (num) => {
    if(num > 4){
        anyNums.push(num)
    }
})


console.log(anyNums)



const books = [
    { title: 'The Shadow Realm', genre: 'Fantasy', publish: 1995, edition: 2010 },

    { title: 'Echoes of Time', genre: 'Science Fiction', publish: 1978, edition: 2000 },

    { title: 'Whispers in the Dark', genre: 'Mystery', publish: 2003, edition: 2015 },

    { title: 'The Lost Kingdom', genre: 'Adventure', publish: 1965, edition: 1998 },

    { title: 'Silent Shores', genre: 'Romance', publish: 2012, edition: 2020 }
]

const userBooks = books.filter( (bk) => bk.genre === 'Adventure')


const userBook = books.filter( (bk) => bk.publish >= 2003 && bk.genre === 'Mystery')

console.log(userBook)