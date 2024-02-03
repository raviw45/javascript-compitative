function findMax(arr){
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

let arr=[2,3,12,32,43,55,65,8,34];
console.log(findMax(arr));

//second method to do so
function findMaximum(arr){
    return Math.max(...arr);
}
console.log(findMaximum(arr));