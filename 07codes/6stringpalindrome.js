const str='level';
function ispalindrom(str){
    return str.split("").reverse().join("");
}

if(str===ispalindrom(str)){
    console.log('Given string is palindrome')
}else{
    console.log("Given string is not palindrome");
}
