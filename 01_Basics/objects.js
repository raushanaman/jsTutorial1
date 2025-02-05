// we can declare any object in two ways 1. through literals 2. thorugh constructor

// through object literals

const myobj  = {} // this curly is an  object {empty object} . we can put some value into it to access it

//example:

const mySymbol = Symbol("bihta")
const myUser = {
    name: "aman Raushan",
    age: 20,
    [mySymbol]: "bihar",
    location:"vadodara",
    LastLoginDays: ["Monday","Saturday"]

}

//how to access

//console.log(myUser.name, myUser.age);
//or
// console.log(myUser["location"]);
// console.log(typeof myUser.mySymbol);
// console.log(myUser[mySymbol]);

// how to access object value (ans. using dot(.) notation)

// how to change the value of objects

// myUser.location= "bihar"

// console.log(myUser.location)

// if i want that no one can change the value of the object then we use freeze method

//Object.freeze(myUser)
//myUser.location= "vadodara"
console.log(myUser)

// now if i want to  add some greetings into the object then we simply use function for that

myUser.greeting = function(){
    console.log("hello my users");
}
console.log(myUser.greeting())

//console.log(myUser.greeting) // throws function (anonymous) as an error but actually this not  an error

// refer name as greeting from inside the object 

myUser.greeting2 = function(){
    console.log(`Hello ${this. name} welcome to js tutorial`);
}
console.log(myUser.greeting2())