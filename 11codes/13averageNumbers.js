const arr=[1,2,3,22,44,16];
function averageNumbers(arr){
    let n=arr.length;
    let sum=0;
    for(let i=0;i<n;i++){
       sum +=arr[i];
    }
    return Math.ceil(sum/n);
}

console.log(averageNumbers(arr));
//another way to get the output
function findAverage(arr){
   return Math.ceil(arr.reduce((a,b)=>a+b)/arr.length);
}
console.log(findAverage(arr));