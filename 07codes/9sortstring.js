const str="animal";
function sorrt(str){
   var sorted=str.split("");
    for(let i=0;i<sorted.length;i++){
        for(let j=0;j<sorted.length;j++){
            if(sorted[j]>sorted[j+1]){
                let temp=sorted[j];
                sorted[j]=sorted[j+1];
                sorted[j+1]=temp;
            }
        }
    }
    return sorted.join('');
}
console.log(sorrt(str));