let langauge;

let finallangauge=
   langauge !=null && langauge != undefined
   ? langauge:'javascript';

   console.log(finallangauge);


//    instead of the whole stuff just use the nullish operator to define 
//    if the variable is null or undefined



// nullish operator example
let lang="java";
let finallang=lang ?? "javascript";//nullish or coalescing operator
console.log(finallang);
