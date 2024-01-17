function isAnagram(str1,str2){
     str1=str1.toLowerCase();
     str2=str2.toLowerCase();
     if(str1.length!=str2.length){
        return false;
     }

     str1=str1.split("").sort().join("");
     str2=str2.split("").sort().join("");
     console.log(str1+",or"+" "+str2);
     return str1==str2;
}

console.log(isAnagram("race","Care"));