const arr=[1,2,2,3,-3,4,5,6,12,35];
function sumOfNumbers(arr){
    let n=arr.length;
    let sum=0;
    for(let i=0;i<n;i++){
        sum +=arr[i];
    }
    return sum;
}

console.log(sumOfNumbers(arr));

//another method to find the sum
console.log(arr.reduce((a,b)=>a+b,0));