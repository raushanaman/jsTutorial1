const userEmail = "aman@.ai"

if (userEmail){
    console.log("got user email");
    
}
else{
    console.log("don't have user email");
    
}

/* falsy values:
false,0,-0,BigInt 0n,"" ,null,undefined,NaN

truthy values:
"0", 'false', " ", [],{}, function(){}
*/

// now we check object is empty or not

const emptyObj = {}
if (Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

// Nullish coalescing Operator (??): focus on two things 1. null 2.  undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10 // here 10 is assign to val1
val1 = undefined ?? 10

console.log(val1);

