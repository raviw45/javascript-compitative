const a={'greeting':"hii"};
//when we pass the referece of the one object to the another object
//and modify in the second object then that reflects in the original
// let z=a;
// z.greeting="Bye";
// console.log(a.greeting)



//to avoid that issure we can use destructuring or object.assgin 
//or structured clone

/*
let s={...a};
s.greeting="Bye";
console.log(a.greeting);
*/


//Object.assign
let z=structuredClone(a);
z.greeting="bye";
console.log(a.greeting);