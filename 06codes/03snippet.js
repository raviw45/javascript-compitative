func();//function defined with the undefined at the top of the page


function func(){
    console.log("Printed with the pattern!!!");
}

func2();//it will throw the exception
const func2=()=>{
    console.log("Another function with the pattern!!!")
}
//arrow function cannot be hoisted to the higher scope or global scope