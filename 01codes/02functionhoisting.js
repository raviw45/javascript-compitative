/*
   function hoisting can be done only with the simple or normal function
   we can't do force the hoisting with function expression and arrow 
   function if we assign the function in the var data type.



*/


a();

function a(){
    console.log("Hello we are in the function");
}
// this function will achieve the function hoisting..

// b();

var b=function(){
    console.log("Inside the function expression")
}// it will throw the exception b is not a function


console.log( typeof b);


c();

var c=()=>{
    console.log("Inside the arrow function!!!");
}//it will throw the exception c is not a function...