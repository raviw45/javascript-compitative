function getPositiveArray(arr){
    let arr2=[];
    for(let el of arr){
        if(el>=0){
            arr2.push(el);
        }
    }
    return arr2;
}

let arr=[1,2,-3,98,34,-1,4,-9,-5,88,0];
console.log(getPositiveArray(arr));


//second method to get positive numbers from array
function findPositiveNumbers(arr){
    return arr.filter((el)=>el>=0);
}
console.log(findPositiveNumbers(arr));

// function findPositiveNumbers2(arr){
//     return arr.map((el)=>el+2);
// }
// console.log(findPositiveNumbers2(arr));

