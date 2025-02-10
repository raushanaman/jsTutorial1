//if syntax
// if (condition must be true to excute the inner code){

// }
//example
if(2==2)
{
   console.log("if statement executed ") 
}

/* comparision operators 
<,>,<=,>=,==,===,!=,*/
// if-else
// const temp =41
// if(temp ===41)
// {
//     console.log("temperature is less than 50");
    
// }
// else{
//     console.log("tempearature is greater than 50");
    
// }

//if -else-if
// balance = 1000
// if(balance<500)
// {
//     console.log("less than 500");
    
// }
// else if(balance < 750){
//     console.log("less than 750 greater than 500");
    
// }
// else if(balance <900){
//     console.log("less than 900 greater than 750");
    
// }
// else{
//     console.log("greater than 900" );
    
// }

const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard)
{
    console.log("allow to buy something");
    
}
const loggedInWithEmail = false
const loggedInWithGoogle = true
if(loggedInWithEmail || loggedInWithGoogle)
{
    console.log("allow to signIn");
    
}

