function isPrime(n){
    if(n<=1)return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0)return false;
    }
    return true;
}

function getPrimes(startAt,n){
   let arr=[];
   for(let i=startAt;i<=n;i++){
     if(isPrime(i)){
        arr.push(i);
     }
   }
   return arr;
}

let result=getPrimes(0,100);
console.log(result);
console.log(Array.from(result).length);
