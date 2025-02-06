 function  sayMyname(){
    console.log("a")
    console.log("m");
    console.log("a");
    console.log("n");
    
 }

 //sayMyname()

 function add(num1, num2)
 {
   let result= num1 + num2
   return result

 }

// const result = add(2,3)
 //console.log("Result: ",result)

 function loginUsermsg(username){
   if(username === undefined){
     // console.log("please enter username");
      return
      
   }
   else{
      return `${username} just logged in`

   }
   
 }
  const result = loginUsermsg()
  //console.log(result);

  // in the above code if user doesn't pass any msg then  while printing the result it will print undefined ........ + other msg

  function calculateCartPrice(...num1){
   return num1
  }

  //console.log(calculateCartPrice(200,400,500))

  // in the above code (... is (restOperator)) to see how  it works run the code

  const userObj = {
   username : "aman",
   price: 199

  }
  function handleObject(anyObject){
   console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
  }
  handleObject(userObj)

  //in the above code we handle object with function

  // now we pass array in function as an arguments in the below code
  const myArray =[200,300,400,500]

  function returnSecondValue(getarray)
  {
   return getarray[1]
  }
  console.log(returnSecondValue(myArray))