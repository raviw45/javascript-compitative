//Argument object in javascript

// function sum(a,b){
//     let sum=a+b;
//     console.log(sum);
// }

// sum(10,20);


// sum(10,20,30);// this is will take only two arguments


function sum(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    console.log(sum);
}

sum(10,20); 
sum(10,20,30);