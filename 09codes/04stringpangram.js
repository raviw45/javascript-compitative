function ispangram(str){
    let newStr=str.toLowerCase();
    let alphabet="abcdefghijklmnopqrstuvwxyz".split("");

    for(let i=0;i<alphabet.length;i++){
        if(newStr.indexOf(alphabet[i])<0){
            return false;
        }
    }
    return true;
}

console.log(ispangram("abcdefghijklmnopqrstuvwxyz"));
