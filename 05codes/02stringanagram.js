var str1="Race";
var str2="care";

function isStringAnagram(str1,str2){

str1=str1.replace(/\s/,'').toLowerCase();
str2=str2.replace(/\s/,'').toLowerCase();

if(str1.length!==str2.length){
  return false;   
}

str1=str1.split('').sort().join('');
str2=str2.split('').sort().join('');


  return str1===str2;
}

const check=isStringAnagram(str1,str2);
if(check){
    console.log("Strings are anagram")
}else{
    console.log('Strings are not anagram');
}