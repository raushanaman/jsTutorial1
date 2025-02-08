// In this file we learn about arrow function and this keyword

// This keyword: this keyword is used to access the current context

const user = {
    username: "aman",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()
//console.log(this)


// function one(){
//     let username = "aman"
//     console.log(this.username)
// }
// one()
// we can't use this keyword inside the function to know the reason run the above code

// Now way to declare arrow function
// syntax of arrow function : == () =>{}
/* const function_name = () => {
         function definition
    } */

const two = () => {
    let username = "aman"
    console.log(this.username)
}// the result  is  same for  this  function also that is undefined

two ()
// const addtwo = (num1, num2)=> {
//     return num1 + num2
// }
// console.log(addtwo(3,4))

//there is another way to return  value in function that is called implicit return
const addtwo = (num1 , num2) => num1 + num2 //this is called implicit return (without using return keyword) it is  used 
// only when , when we don't use curly braces in function but when we use curly braces we must be mention return keyword

console.log(addtwo(5,3))


// how to return object 
const three  = (num1, num3) => ({username1:"object"})
console.log(three(8,7))




