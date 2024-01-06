const user={
    "first name":"aman khan",
    age:34,
    address:'pune',
    sayHello:function(){
        return "hello world!!";
    }
}

console.log(user.address);
console.log(user.age);
console.log(user["first name"]);
console.log(user.sayHello());