const arr=[1,2,3,4,5];
console.log('By using reduce method:')
const result=arr.reduce((acc,item)=>{return acc+item},0);
console.log(result);
console.log("By using iteration methods:");
var sum=0;
for(var num of arr){
   sum+=num;
}
console.log(sum)