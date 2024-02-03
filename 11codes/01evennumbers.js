const arr=[];
let count=0;
for(let i=0;i<=100;i+=2){
    arr.push(i);
    count++;
}

console.log(arr);
console.log(`The total even numbers from 0 to 100 is: ${count}`);