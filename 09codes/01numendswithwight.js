var arr=[];
function lastNumberWithEight(start, end){
    for(let i=start;i<=end;i++){
       if(i%10==8){
        arr.push(i);
       }
    }
}

lastNumberWithEight(201,400);
console.log(arr);