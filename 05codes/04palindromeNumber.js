var number=123454321;
const num=number;
var reversed=0;

while(number!==0){
    reversed=reversed*10+number%10;
    number=Math.floor(number/10);
}

if(num===reversed){
    console.log("Given number is a palindrome number!!!")
}else{
    console.log("Given number is not a palindrome number!!!");
}