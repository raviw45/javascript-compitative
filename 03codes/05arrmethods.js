const arr=[12,23,234,435,34];
/*
        arr.pop();
        console.log(arr);
        arr.push(123);
        console.log(arr);
        arr.shift();
        console.log(arr);
        arr.unshift(888);
        console.log(arr);
*/

/*
arr.sort(function(a,b){return a-b});//sort method only sorts the string arr
//for numeric sort we have to use the compare function
console.log(arr);



console.log(arr);
arr.reverse();
console.log(arr);

var newArr=arr.toSorted(function(a,b){return a-b;});//doen't affect to the original arrray
console.log(newArr);
console.log(arr);


var newSS=arr.toReversed();//also doesn't change the original array
console.log(newSS);
console.log(arr);
*/


let newWithArr=arr.with(2,432);//only replace particular index element
console.log(newWithArr);//[34,435,432,23,12]
console.log(arr);//doesnt change the  original array