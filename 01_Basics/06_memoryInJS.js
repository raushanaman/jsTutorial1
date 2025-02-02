//********************************************************************************** */

// stack (for primitive datatypes), heap (for non-primitive datatype)

/* When we talking about stack memory the in the case of primitive datatypes it uses stack memory which
   means we get a copy of that actual data, it uses static memory allocation */

// Example: 
let myYoutubeName = "ayushyadavz"; // Primitive type stored in the Stack.
let anotherName = myYoutubeName;   // A copy of the value is created in the Stack.
anotherName = "amanyadavz";        // Changing the copy does not affect the original.

console.log(myYoutubeName); // Output: ayushyadavz (Original value remains unchanged)
console.log(anotherName);   // Output: amanyadavz (Only the copy value is changed)

/* And in the case of non-primitive datatypes it uses heap memory which means we get a reference of that actual data,
   heap memory uses dynamic memory allocation */

// Example:
let userOne = {         // The reference to this object is stored in the Stack.
    email: "user@google.com",
    upi: "user@ybl"
};                      // The actual object data is stored in the Heap.

let userTwo = userOne;  // userTwo references the same object in the Heap.

userTwo.email = "ayush@google.com"; // Modifying userTwo also affects userOne.

console.log(userOne.email); // Output: ayush@google.com
console.log(userTwo.email); // Output: ayush@google.com