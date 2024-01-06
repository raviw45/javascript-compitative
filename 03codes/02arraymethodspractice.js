const arr=["ravi","amit","aniket","satish",'meghraj'];


arr.forEach((val,idx)=>{
    console.log((idx+1)+"->"+val);
})// method to iterate the array


let rees=arr.map((val,idx)=>{
     return val+="hii";
})
console.log(rees);

const nums=[1,2,3,4,5];
let evenOdd=nums.map((val)=>{//this method doesn't change the orgnl arr it only returns
    if(val%2==0){
        return val;
    }else return;
});


console.log(evenOdd);
console.log(nums);


let even=nums.filter((val)=>{//it also doesn't change the orignal but modifies curr.
    if(val%2==0){
        return val;
    }else{
        return;
    }
});
console.log(even);
console.log(nums);

const s=[100,23,45,34,55,5,678,543,345];
const final=s.reduce((prev,curr)=>{
    if(prev<curr)
      return curr;
    else  
       return prev;
},-1);
//it will give the largest value in the array
//reduce method reduce the array into the single value
console.log(final);


let values=[23,34,56,67,66];
const cart=values.reduce((acc,next)=>{
    return acc=acc+next;
},0);

console.log(cart);