//the concept called the variable hoisting
/*
    if we declare the variable with the data type var then it has the 
    scope of the overall working page.
    so first of all it take the undifined value and then initialize that 
    variable by user this concept called as the variable hoisting.


    but if we try to do the same thing with the let and const keyword
    then it throw an exception cannot access variable before the
    initialization...



*/
console.log(a);
var a=10;
console.log(a);



console.log(b);
let b=20;
console.log(b);