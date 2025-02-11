// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5){
       // console.log("5 is best number");
        
    }
   // console.log(element);
    
    
}
// nested loop

for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j < 10; j++) {
        console.log(`innner loop value for ${j} and inner loop ${i}`);
        
        
    }
    
}

// keywords break and continue must learn through online content

// while loop and do-while loop

let a =0
while(a <10)
{
  //console.log(`value of a is ${a}`);
  a = a+2
  
}
// do-while

let score = 0
do{
   // console.log(`score is ${score}`);
    score++
}while(score<=10)

    // maps: it store unique value
    const map = new Map()
    map.set('IN',"india")
    map.set('FRA',"france")
    map.set('ENG',"england")

    console.log(map)

    // for of loop
    for (const [key,value] of map){
        console.log(key,':-',value);
        
    }
    // Objects are not iteratable through for-of loop
    const myObject = {
        'game1': "NFS",
        'game2': "Spiderman"
    }