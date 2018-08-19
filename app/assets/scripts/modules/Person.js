class Person {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    
    greet() {
        console.log(`Hi there, my name is ${this.name}, and my fav color is ${this.color}`);
    }
}

export default Person;