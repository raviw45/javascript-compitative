function getDayname(dateStr,locale){
    var date=new Date(dateStr);
    return date.toLocaleDateString(locale,{weekday:"long"})
}

var dateStr="05/23/2023";
var day=getDayname(dateStr,'en-US');
console.log(day);



console.log(new Date("2022-05-04").toLocaleDateString('en-US',{weekday:"short"}));