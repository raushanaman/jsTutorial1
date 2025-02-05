// //const myobj = new Object() or

// const myobj = {}

// myobj.id = "123abc"
// myobj.name = "aman"
// myobj.isLogin = false

// //console.log(myobj)

// const regularUser = {
//     email:"aman@gmail.com",
//     fullname: {
//         userfullname:{
//             firstname:"aman",
//             lastname:"raushan"
//         }
//     }
// }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname?.userfullname.firstname);/* here we apply ? because if fullname is exist then it will 
// print the remaining portion*/

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

// //const obj3 = { obj1,obj2}
// //or
// //const obj3 = Object.assign({},obj1,obj2)


// const obj3 = {...obj1, ...obj2}

// //when values come from database then we use array of objects because there are multiple data comes at a time
// //example
// const user = [
//     {
//         id:1,
//         email:"h@gmail.com"
//     },
//     //object2
//     {
//         id:2,
//         email:"a@gmail.com"
//     }
// ]


// console.log(Object.keys(myobj))
// console.log(Object.values(myobj))
// // the above two methods are very important for project point of view

// console.log(obj3)
const course ={
    coursename : "js in hindi",
    price: "999",
    Instructor:"aman"
}
//course.courseInstructor

const {Instructor}=course
console.log(Instructor);
