function rotateArrayLeft(arr){
     if(arr.length<1) return arr;
     let firstElement=arr.shift();
     arr.push(firstElement);
     return arr;
}
const arr=[1,2,3,4,5,6,7,8,9,10];
console.log(rotateArrayLeft(arr));
