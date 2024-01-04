//rest parameter
function tuto(name,...tasks){
    console.log(`Hey ${name} you todo list task are:`);
    for(let i=0;i<tasks.length;i++){
       console.log(`${i+1}. ${tasks[i]}`);
    }
}
tuto("Ravikant","do e-commerce project","learn js","follo leetcode");