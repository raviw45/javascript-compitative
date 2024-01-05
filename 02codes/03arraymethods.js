let a=["amit","aniket","ravi","superstar","action","methods"];

// a.push("akash");  adds the element at the last of the array
// a.pop();    removes the last element from the array

// a.shift();  removes the first element from the array
// a.unshift("akash"); adds the element at the very first index of array

// console.log(a.at(3)); at method will return the element the parti. index


// console.log(a.join("*")); prints the string by joining with regex 


// console.log(a.copyWithin(3,0)); creats the copy from index to and print next


/*
const b=[[1,2],[3,4],[5,6]];

console.log(b.flat()); merge the subarrays and return single array

*/

/*
    let result=a.splice(2,1,"fruits","animals"); 
    console.log(result); splice method returns the deleted element
    console.log(a); make the changes in the original array add element
    from particular index
*/

/*
    let result=a.toSpliced(0,1,"power","sub");
    console.log(result); this method return new array but dosn't chng org.
    console.log(a);  old method return the deleted element and chng ori.
*/

/*
let result=a.slice(2);//slice out two elements without affecting original
console.log(result);//also take two para start and upto
console.log(a);

*/


//another methods are sort(),reverse(),toSorted(),toReversed(),


//sort and reverse method makes the change in the original array
//but toSorted() and toReversed() method doesn't affect to the original

/*
let c=a.sort();// return the new array
console.log(c);//change the original array
*/


/*
    let c=a.reverse();// returns the new array
    console.log(c); // change the original array
*/



const arr=[12,23,88,67,100,25,55,45];
// let result=arr.sort();//sort method only work for the string type of data
// console.log(result);



// arr.sort((a,b)=>a-b);//use the compare function to sort the numeric data
// console.log(arr);



// arr.sort(function(a,b){return a-b;});
// console.log(arr);


