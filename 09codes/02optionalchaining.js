var user={
    name:"ravi",
    // address:{
    //     city:"pune",
    //     zipcode:"413534"
    // }
}

const city=user?.address?.city;
console.log(city);

//if the object address is not present then it will throw the exception
//to avoid this issue we can use the optional chaining by using ? opr.
//then it will give us the undefined as an output-