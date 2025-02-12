const myNums = [1,2,3,4,5,6,7]

//const newNums=myNums.filter( (num) => num > 2) or

// const newNums=myNums.filter((num) => {
//     return num>2
// })

// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title:"book One", genre: 'fiction',publish:1981,edition: 2004},
    {title:"book two", genre: 'non-fiction',publish:1981,edition: 1994},
    {title:"book three", genre: 'history',publish:2001,edition: 2001},
    {title:"book four", genre: 'science',publish:2002,edition: 2025},
    {title:"book five", genre: 'non-fiction',publish:1981,edition: 1992},
    {title:"book six", genre: 'science',publish:1987,edition: 1995},
];

//let userbooks= books.filter((bk) => bk.genre === 'history')
 let userbooks= books.filter((bk1) =>{
    return bk1.publish>=1985 && bk1.genre ==='science'
})
console.log(userbooks);

