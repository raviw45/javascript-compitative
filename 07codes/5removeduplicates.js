const arr=[1,2,3,4,5,2,2,3,3,3,3,3,2,1,7,6,8];

const result=[...new Set(arr)];
console.log(result.sort(function(a,b){return a-b}));