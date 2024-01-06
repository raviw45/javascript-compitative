const fruits=[
    "mango",
    "banana",
    "jackfruit",
    "apple",
    "orange"
];

let search=fruits.find((val,idx)=>{
    if(val=="banana")
       return true;
    else
       return false;
});


console.log(search);