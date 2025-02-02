// example of  comparision Operators

console.log(null>0)
console.log(null == 0)
console.log(null>=0)

/* output1: false
   output2: false
   output3: true
   reason:- The reason is that an equality check '==' and comparision >,<,<=,>= work differently.
   Comparision convert null to a number, trating it as 0 that's why (3) null >= 0 is true and (1) null > 0 is false
   */
  
