function hoc(arr,callback){
    let output=[];
    for(let i=0;i<arr.length;i++){
        output.push(callback(arr[i]));
    }

    return output;
}

function area(num){
    return Math.PI *num *num;
}

function diameter(num){
    return num*2;
}

const radius=[1,2,3,4,5];
console.log(hoc(radius,diameter));
console.log(hoc(radius,function(num){
    return Math.floor(Math.PI*num*num);
}))