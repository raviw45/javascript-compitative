function sumDigit(n){
    let s=n.toString();
    let sum=0;
    for(let char of s){
        let digit=parseInt(char);
        sum+=digit;
    }
    return sum;
}

console.log(sumDigit(12232));
//second way to do so
function findSumDigit(n){
    return n.toString().split('').reduce((arr,curr)=>arr+parseInt(curr),0);
}
console.log(findSumDigit(12232));