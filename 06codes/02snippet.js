const income={
    skills:168,
    monthly(){
        return this.skills*108;//return actual value
    },
    yearly:()=>888*this.skills//return the NaN
}

//normal function referce the current executing context but arrow function
//referece to the parent of the page and the parent of the page is window 
//object

console.log(income.monthly());
console.log(income.yearly());