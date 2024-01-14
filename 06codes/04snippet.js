const user={
    firstname:"Ravikant",
    lastname:"Waghmare",
    DOB:'19-10-2012'
}

Object.defineProperty(user,'lastname',{
    writable:false
})

user.lastname="pawar";
console.log(user);