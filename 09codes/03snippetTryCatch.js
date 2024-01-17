function func(){
    try{
       throw new Error();
    }catch(x){
        var x=1,y=2;//decare at the top as undefined
        console.log(x);//print one
    };
    console.log(x);//print undefined
    console.log(y);//print 2
};


func();