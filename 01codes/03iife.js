// IIFE -immedialtely invoked function expression

(function(){
    console.log("Hello from the IIFe function");
})(); //function invoked very next after the declaration...



const counter=(function(){
    let i=0;
    return{
        get:function(){
            return i;
        },
        set:function(val){
            i=val;
        },
        increament:function(){
            return ++i;
        }
    };
})();

console.log(counter.get());
counter.set(2);
console.log(counter.get());
counter.increament();
console.log(counter.get());

//to use the getter and setter in the function it is an better option.