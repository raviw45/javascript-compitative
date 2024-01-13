//first approach to reverse the string
const str="Ravi Waghmare";
const reversedString=str.split("").reduce((acc,char)=>char+acc,"");
console.log(reversedString);

//second approach to reverse the string
function reverseStr(str){
    return str.split('').reverse().join('');
}

console.log(reverseStr(str));



//third approach to reverse the string
const revStr=[...str].reverse().join('');
console.log(revStr);


//fourth approach to reverse the string
 const revString=Array.from(str).reverse().join("");
 console.log(revString);

 //fifth approach to reverse the string
 function reverseString2(str){
    return [...str].reduce((x,y)=>y.concat(x))
 }
 console.log(reverseString2(str));


 //sisth approach to reverse the string
 let result='';
 for(let i=0;i<=str.length;i++){
    let char=str.charAt(i);
    result=char+result;
 }
 console.log(result);


 //seventh approach to reverse the string
 let revString2='';
 for(let i=str.length-1;i>=0;i--){
        revString2+=str[i];
 }
 console.log(revString2);