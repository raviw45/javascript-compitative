//first approach to reverse the number
var num=1234567;
const reversedNumber=num.toString().split('').reverse().join('');
console.log(Number(reversedNumber));


//second approach to reverse the number
function reverseNumber(num){
    let digits=Array.from(String(num),Number);
    let reverseNumber=digits.reduce((acc,digit)=>[digit,...acc],[]);
    return parseInt(reverseNumber.join(''));
}

console.log(reverseNumber(num));


//third approach to reverse the number
function reverseNum(num,reversed=0){
    if(num===0){
        return reversed;
    }
    return reverseNum(Math.floor(num/10),reversed*10+num%10);
}

console.log(reverseNum(num));


//fourth approach to reverse the number
var reversed=0;
while(num!==0){
    reversed=reversed*10+num%10;
    num=Math.floor(num/10);
}
console.log(reversed);