//ways to create the array
let a=[4,3,7,2];
let b=new Array(5,6,7,8);
let c=Array.of("ravi","amit","aniket");
console.log(a);
console.log(b);
console.log(c);


//sorting method
console.log(a.sort());
console.log(c.sort());



//ways to iterate the array

// 1.For loop
// 2.For-each loop
// 3.For-of loop
// 4.for-in loop
// 5. toString method


//1
   for (let i=0;i<a.length;i++){
      console.log(a[i]);
   }


//2
  b.forEach(myFunction);

  function myFunction(item,index){
    console.log(index+" ,"+item);
  }

  //forEach loop with callback function
  b.forEach((item,index)=>{
    console.log(index+" ,"+item);
  })

//3

for(let x of c){
    console.log(x);
}

//4

for(let x in c){ //it only gives a index in the array
    console.log(c[x]);
}