function fib(num){
    if(num<=1){
        return num;
    }

    return fib(num-1)+fib(num-2);
}

const output=[];
function getSeries(){
    for(let i=0;i<8;i++){
        output.push(fib(i));
    }
}

getSeries();

console.log(output);