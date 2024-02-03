function fib(n){
    if(n<=1){
        return n;
    }
    return fib(n-1)+fib(n-2);
}
const arr=[];
for(let i=0;i<=10;i++){
    arr.push(fib(i));
}

console.log(arr);