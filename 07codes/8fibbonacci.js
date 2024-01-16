function fib(num){
    if(num<=1){
        return num;
    }

    return fib(num-1)+fib(num-2);
}
var arr=[];
for(let i=0;i<=8;i++){
    arr.push(fib(i));
}

console.log(arr)