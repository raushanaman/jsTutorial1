// IIFE: immediately Invoked Function Expression

(function one(){
    console.log(`DB CONNECTED`)
})();
// to avoid the global scope varibles pollution we use IIFE which is immediately invoked
// semi-colon is mandatory after immediate calling of this iife function

((name) =>{
    console.log(`dbconnected two ${name}`)
})('aman');