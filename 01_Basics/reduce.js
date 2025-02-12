const array1 = [1,2,3]

// const total = array1.reduce(function (acc,curval){
//     console.log(`acc ${acc} and curval ${curval}`);
    
//            return acc + curval

// },0)

// through arrow function

const total = array1.reduce((acc,curval) =>{
    console.log(`acc ${acc} and curval ${curval}`);
    
           return acc + curval

},0)

console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 999    
    },
    {
        itemName: "java course",
        price: 1999    
    },
    {
        itemName: "python course",
        price: 799    
    },
    {
        itemName: "c course",
        price: 299   
    },
]

const total1 = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(`price to pay ${total1}`);

