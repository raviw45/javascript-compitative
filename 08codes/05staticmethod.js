class Lizard{
    static changeColor(newColor){
        this.newColor=newColor;
        return this.newColor;
    }

    constructor(newColor){
        this.newColor=newColor;
    }
    showColor(){
        return this.newColor;
    }
}


const obj=new Lizard({newColor:"blue"});
// console.log(obj.changeColor("pink")); it will throw the error because changeColor is static method
console.log(Lizard.changeColor("orange"));
console.log(obj.showColor());