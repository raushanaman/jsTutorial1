if(true){
    let a = 10
const b = 20
var c = 30

}

//console.log(a);
//console.log(b);
console.log(c);
// here we can see that var c = 30 is declare inside if condition scope but it works also outside the scope 
// which is not true. That's why we avoid declaring variable with var keyword


function one(){
    const username = "aman"
    function two(){
        const website = "youtube"
        console.log(username)

    }
    
    two()
    
}
one()

// +++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++
 console.log(addone(5))
function addone(num){
    return num +1
 }
 addone(5)

 const addtwo = function(num){ // this way is also called  expression
    return num + 2
 }
 addtwo(5)
