const arr=[34,65,67,[43,76,87,23,662,7,[54,7,1020,23,79,998,2],54],54,4,2];

let maxNum=Math.max(...(arr.flat(Infinity)));
console.log(maxNum);


const getLargestEl=(arr,largeEl=-Infinity)=>{
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            return getLargestEl(arr[i],largeEl); 
        };
        
        if(arr[i]>largeEl){
            largeEl=arr[i];
        }
    }
    return largeEl;
}
console.log(getLargestEl(arr));