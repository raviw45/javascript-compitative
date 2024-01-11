function fibb(num){
    if(num<=1){
        return num;
    }
    return fibb(num-1)+fibb(num-2);
}

var set=[];
const calCulate=()=>{
     for(let i=0;i<=5;i++){
        set.push(fibb(i));
     }
}
calCulate();

console.log(set);
